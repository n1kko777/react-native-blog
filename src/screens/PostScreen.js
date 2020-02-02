import React, { useEffect, useCallback } from "react";
import { View, ScrollView, Image, Alert, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleBooked, removePost } from "../store/actions/post";

import { CustomButton } from "../components/CustomButton";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const { image, container, h4, p } = styles;

  const post = useSelector(state =>
    state.post.allPosts.find(post => post.id === postId)
  );

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const dispatch = useDispatch();
  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const onDelete = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            navigation.navigate("Main");
            dispatch(removePost(postId));
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }

  const { img, text, date } = post;

  return (
    <ScrollView>
      <Image source={{ uri: img }} style={image} />
      <View style={container}>
        <Text h4 style={h4}>
          {text}
        </Text>

        <Text style={p}>Создано {new Date(date).toLocaleDateString()}</Text>

        <CustomButton
          title="Удалить пост"
          onClick={onDelete}
          color={THEME.DANGER_COLOR}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postTitle = navigation.getParam("postTitle");
  const postBooked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");

  const iconName = postBooked ? "ios-star" : "ios-star-outline";

  return {
    title: postTitle,
    headerTitle: postTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
        <Item title="Save post" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 30
  },
  h4: {
    marginBottom: 20,
    fontFamily: "open-semibold"
  },
  p: {
    fontFamily: "open-regular",
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 200
  }
});
