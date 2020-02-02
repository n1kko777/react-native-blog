import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation-tabs";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { createDrawerNavigator } from "react-navigation-drawer";

import { THEME } from "../theme";

const navogatorOptions = {
  defaultNavigationOptions: {
    headerBackTitle: "Назад",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navogatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookMarkedScreen,
    Post: PostScreen
  },
  navogatorOptions
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

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navogatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navogatorOptions
);

const RouteConfigs = {
  PostTabs: {
    screen: BottomNavogator,
    navigationOptions: {
      drawerLabel: "Главная"
      // drawerIcon: <Ionicons name="ios-home" size={22} />
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: "О прилодении"
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      drawerLabel: "Создать пост"
    }
  }
};

const DrawerNavigatorConfig = {
  contentOptioons: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: "open-semibold"
    }
  }
};

const MainNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig
);

export const AppNavigation = createAppContainer(MainNavigator);
