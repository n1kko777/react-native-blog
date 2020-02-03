import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Input } from "react-native-elements";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomButton } from "../components/CustomButton";
import { THEME } from "../theme";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const imgRef = useRef();

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { wrapper, textarea } = styles;

  const dispatch = useDispatch();
  const saveHandler = () => {
    const post = {
      img: imgRef.current,
      title,
      text,
      booked: false,
      date: new Date().toJSON()
    };

    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  const photoPickHandler = imageSrc => {
    imgRef.current = imageSrc;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={wrapper}>
          <Input
            placeholder="Введите заголовок поста"
            value={title}
            onChangeText={setTitle}
          />
          <Input
            inputContainerStyle={textarea}
            placeholder="Введите текст поста"
            value={text}
            onChangeText={setText}
            multiline
          />

          <PhotoPicker onPick={photoPickHandler} />

          <CustomButton
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            buttonStyle={{ marginTop: 30 }}
            onClick={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  title: "Создание поста",
  headerTitle: "Создание поста",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    fontFamily: "open-regular",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  textarea: {
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 20
  }
});
