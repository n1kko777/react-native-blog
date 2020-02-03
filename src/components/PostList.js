import React from "react";
import { FlatList, View, RefreshControl } from "react-native";
import { withTheme, Text } from "react-native-elements";

import { CustomCard } from "../components/CustomCard";
import { THEME } from "../theme";

export const PostList = withTheme(
  ({ navigation, theme, dataList, loading, onRefresh }) => {
    const keyExtractor = item => item.id.toString();

    const renderItem = ({ item }) => (
      <CustomCard item={item} theme={theme} navigation={navigation} />
    );

    const handleRefreshing = () => onRefresh();

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
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefreshing}
            tintColor={THEME.MAIN_COLOR}
          />
        }
      />
    );
  }
);
