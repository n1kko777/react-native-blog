import React from "react";
import { Card, Text } from "react-native-elements";

import { CustomButton } from "./CustomButton";

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
      <CustomButton
        title="Открыть запись"
        onClick={() => onOpenPostHandler(item)}
        color={theme.colors.primary}
      />
    </Card>
  );
};
