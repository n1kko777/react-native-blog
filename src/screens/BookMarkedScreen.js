import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { PostList } from "../components/PostList";
import { DATA } from "../data";

export const BookMarkedScreen = ({ navigation }) => {
  return (
    <PostList
      navigation={navigation}
      dataList={DATA.filter(elem => elem.booked)}
    />
  );
};

BookMarkedScreen.navigationOptions = ({ navigation }) => ({
  title: "Избранное",
  headerTitle: "Избранное",
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
