import React from "react";
import {
  View,
  ScrollView,
  Image,
  Alert,
  Platform,
  StyleSheet
} from "react-native";
import { Button, Text } from "react-native-elements";
import { DATA } from "../data";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

export const PostScreen = ({ navigation }) => {
  const { image, container, h4, p } = styles;

  const postId = navigation.getParam("postId");

  const { img, text, date } = DATA.find(elem => elem.id === postId);

  const onDelete = () => {
    Alert.alert(
      "Удаление поста ",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => console.log("Deleted!")
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: img }} style={image} />
      <View style={container}>
        <Text h4 style={h4}>
          {text}
        </Text>

        <Text style={p}>Создано {new Date(date).toLocaleDateString()}</Text>

        <Button
          title="Удалить пост"
          type={Platform.OS === "ios" ? "clear" : "solid"}
          buttonStyle={{
            backgroundColor:
              Platform.OS === "ios" ? "transparent" : THEME.DANGER_COLOR
          }}
          titleStyle={{
            color: Platform.OS === "ios" ? THEME.DANGER_COLOR : "#fff"
          }}
          onPress={onDelete}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postTitle = navigation.getParam("postTitle");
  const postBooked = navigation.getParam("booked");
  const iconName = postBooked ? "ios-star" : "ios-star-outline";
  return {
    title: postTitle,
    headerTitle: postTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
        <Item
          title="Save post"
          iconName={iconName}
          onPress={() => console.log("Save post")}
        />
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
