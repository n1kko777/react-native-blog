import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";

const PostNavigation = createStackNavigator(
  {
    Main: MainSreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRoute: "Main"
  }
);

export const AppNavigation = createAppContainer(PostNavigation);
