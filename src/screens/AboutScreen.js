import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AboutScreen = () => {
  const { center } = styles;
  return (
    <View style={center}>
      <Text>AboutScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" }
});
