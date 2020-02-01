import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export const MainSreen = ({ navigation }) => {
  const { center } = styles;

  const goToPost = () => {
    const { navigate } = navigation;
    navigate("Post");
  };

  return (
    <View style={center}>
      <Text>MainSreen</Text>

      <Button title="Перейти к посту" onPress={goToPost} />
    </View>
  );
};

MainSreen.navigationOptions = {
  title: "Главная"
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
