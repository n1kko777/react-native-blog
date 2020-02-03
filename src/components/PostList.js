import React from "react";
import { FlatList, View } from "react-native";
import { withTheme, Text } from "react-native-elements";

import { CustomCard } from "../components/CustomCard";

export const PostList = withTheme(({ navigation, theme, dataList }) => {
  const keyExtractor = item => item.id.toString();

  const renderItem = ({ item }) => (
    <CustomCard item={item} theme={theme} navigation={navigation} />
  );

  return (
    <FlatList
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={{ paddingBottom: 30 }}
      keyExtractor={keyExtractor}
      data={dataList}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text
          style={{
            fontFamily: "open-regular",
            textAlign: "center",
            marginTop: 30
          }}
        >
          Нет записей
        </Text>
      }
    />
  );
});
