import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostScreen = () => {
  const { center } = styles;
  return (
    <View style={center}>
      <Text>postScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  title: "Пост 100500"
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
});
