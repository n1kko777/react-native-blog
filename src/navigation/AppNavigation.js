import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation-tabs";

import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: MainSreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerBackTitle: "Назад",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookMarkedScreen,
    Post: PostScreen
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: "Назад",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: "Все",
      tabBarIcon: info => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      )
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Избранное",
      tabBarIcon: info => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      )
    }
  }
};

const BottomNavogator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      })
    : createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: "#fff",
        shifting: true,
        barStyleLight: {
          backgroundColor: THEME.MAIN_COLOR
        }
      });

export const AppNavigation = createAppContainer(BottomNavogator);
