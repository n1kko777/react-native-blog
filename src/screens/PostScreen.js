import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const { center } = styles;

  return (
    <View style={center}>
      <Text>postScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postTitle = navigation.getParam("postTitle");

  console.log("postTitle :", postTitle);

  return {
    title: postTitle
  };
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
});
