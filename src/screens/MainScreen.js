import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

import { PostList } from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.allPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return <PostList navigation={navigation} dataList={allPosts} />;
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
