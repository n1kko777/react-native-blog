import React from "react";
import { Text, FlatList } from "react-native";
import { Card, Button } from "react-native-elements";

import { DATA } from "../data";

export const MainSreen = ({ navigation }) => {
  const keyExtractor = (item, index) => item.id.toString();

  const renderItem = ({ item }) => (
    <Card
      image={{
        uri: item.img
      }}
      title={item.text}
    >
      <Text style={{ marginBottom: 10 }}>
        {new Date(item.date).toLocaleDateString()}
      </Text>
      <Button
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="Открыть запись"
        onPress={() => onOpenPostHandler(item)}
      />
    </Card>
  );

  const onOpenPostHandler = post => {
    const { navigate } = navigation;
    navigate("Post", { postId: post.id, postTitle: post.text });
  };

  return (
    <FlatList keyExtractor={keyExtractor} data={DATA} renderItem={renderItem} />
  );
};

MainSreen.navigationOptions = {
  title: "Главная"
};
