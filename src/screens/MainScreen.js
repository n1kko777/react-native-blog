import React from "react";
import { DATA } from "../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

import { PostList } from "../components/PostList";

export const MainScreen = ({ navigation }) => {
  return <PostList navigation={navigation} dataList={DATA} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  title: "Главная",
  headerTitle: "Главная",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});
