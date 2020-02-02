import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { PostList } from "../components/PostList";

import { useSelector } from "react-redux";

export const BookMarkedScreen = ({ navigation }) => {
  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return <PostList navigation={navigation} dataList={bookedPosts} />;
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
