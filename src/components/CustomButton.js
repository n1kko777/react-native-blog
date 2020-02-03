import React from "react";
import { Button } from "react-native-elements";
import { Platform } from "react-native";

export const CustomButton = ({
  title,
  onClick,
  color,
  buttonStyle,
  titleStyle,
  icon,
  disabled
}) => {
  return (
    <Button
      title={title}
      onPress={onClick}
      type={Platform.OS === "ios" ? "clear" : "solid"}
      buttonStyle={{
        backgroundColor: Platform.OS === "ios" ? "transparent" : color,
        ...buttonStyle
      }}
      titleStyle={{
        color: Platform.OS === "ios" ? color : "#fff",
        ...titleStyle
      }}
      icon={icon}
      disabled={disabled}
    />
  );
};
