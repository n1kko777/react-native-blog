import React from "react";
import { Platform, Text } from "react-native";
import { Card, Button } from "react-native-elements";

export const CustomCard = ({ item, theme, navigation }) => {
  const onOpenPostHandler = post => {
    const { navigate } = navigation;
    navigate("Post", {
      postId: post.id,
      postTitle: post.text,
      booked: post.booked
    });
  };

  return (
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
        type={Platform.OS === "ios" ? "clear" : "solid"}
        buttonStyle={{
          backgroundColor:
            Platform.OS === "ios" ? "transparent" : theme.colors.primary
        }}
        titleStyle={{
          color: Platform.OS === "ios" ? theme.colors.primary : "#fff"
        }}
      />
    </Card>
  );
};
