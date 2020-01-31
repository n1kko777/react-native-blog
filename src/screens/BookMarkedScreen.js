import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const BookMarkedScreen = () => {
  const { center } = styles;
  return (
    <View style={{ center }}>
      <Text>BookMarkedScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" }
});
