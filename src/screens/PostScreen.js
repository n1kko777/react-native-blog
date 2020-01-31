import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const postScreen = () => {
  const { center } = styles;
  return (
    <View style={{ center }}>
      <Text>postScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" }
});
