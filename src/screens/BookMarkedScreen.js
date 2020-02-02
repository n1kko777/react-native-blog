import React from "react";
import { FlatList, View } from "react-native";
import { withTheme } from "react-native-elements";

import { DATA } from "../data";
import { CustomCard } from "../components/CustomCard";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

export const BookMarkedScreen = withTheme(({ navigation, theme }) => {
  const keyExtractor = item => item.id.toString();

  const renderItem = ({ item }) => (
    <CustomCard item={item} theme={theme} navigation={navigation} />
  );

  return (
    <FlatList
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={{ paddingBottom: 30 }}
      keyExtractor={keyExtractor}
      data={DATA.filter(elem => elem.booked)}
      renderItem={renderItem}
    />
  );
});

BookMarkedScreen.navigationOptions = {
  title: "Избранные",
  headerTitle: "Избранные",
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
