import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { PostList } from "../components/PostList";

import { useSelector, useDispatch } from "react-redux";

import { loadPosts } from "../store/actions/post";

export const BookMarkedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const bookedPosts = useSelector(state => state.post.bookedPosts);
  const loading = useSelector(state => state.post.loading);

  return (
    <PostList
      navigation={navigation}
      dataList={bookedPosts}
      loading={loading}
      onRefresh={() => dispatch(loadPosts()).dispatch}
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
