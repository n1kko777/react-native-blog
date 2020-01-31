import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MainSreen = () => {
  const { center } = styles;
  return (
    <View style={{ center }}>
      <Text>MainSreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" }
});
