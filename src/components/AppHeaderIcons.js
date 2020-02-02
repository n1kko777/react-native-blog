import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../theme";

export const AppHeaderIcons = props => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
  />
);
