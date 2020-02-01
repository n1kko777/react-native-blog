import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";

import { THEME } from "../theme";

const PostNavigation = createStackNavigator(
  {
    Main: MainSreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRoute: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(PostNavigation);
