import React, { useState } from "react";
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
import { Image } from "react-native-elements";
import { CustomButton } from "../components/CustomButton";
import { THEME } from "../theme";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/post";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const img =
    "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

  const { wrapper, textarea } = styles;

  const dispatch = useDispatch();
  const saveHandler = () => {
    const post = {
      img,
      text,
      booked: false,
      id: Date.now().toString(),
      date: new Date().toJSON()
    };

    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={wrapper}>
          <Input
            inputContainerStyle={textarea}
            placeholder="Введите текст поста"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            source={{
              uri: img
            }}
            style={{ width: 200, height: 200 }}
          />
          <CustomButton
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            buttonStyle={{ marginTop: 30 }}
            onClick={saveHandler}
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
    marginBottom: 20
  }
});
