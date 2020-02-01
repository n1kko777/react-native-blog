import React from "react";
import { FlatList } from "react-native";
import { withTheme } from "react-native-elements";

import { DATA } from "../data";
import { CustomCard } from "../components/CustomCard";

export const MainSreen = withTheme(({ navigation, theme }) => {
  const keyExtractor = item => item.id.toString();

  const renderItem = ({ item }) => (
    <CustomCard item={item} theme={theme} navigation={navigation} />
  );

  return (
    <FlatList keyExtractor={keyExtractor} data={DATA} renderItem={renderItem} />
  );
});

MainSreen.navigationOptions = {
  title: "Главная"
};
