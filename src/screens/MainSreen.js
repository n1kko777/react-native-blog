import React from "react";
import { DATA } from "../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

import { PostList } from "../components/PostList";

export const MainSreen = ({ navigation }) => {
  return <PostList navigation={navigation} dataList={DATA} />;
};

MainSreen.navigationOptions = {
  title: "Главная",
  headerTitle: "Главная",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log("Take photo")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log("Toggle Drawer")}
      />
    </HeaderButtons>
  )
};
