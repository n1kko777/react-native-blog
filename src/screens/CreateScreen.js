import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CreateScreen = () => {
  const { center } = styles;
  return (
    <View style={center}>
      <Text>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" }
});
