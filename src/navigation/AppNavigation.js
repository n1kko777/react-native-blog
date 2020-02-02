import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation-tabs";

import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";

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

const BottomNavogator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        )
      }
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(BottomNavogator);
