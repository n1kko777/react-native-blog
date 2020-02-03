import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Image } from "react-native-elements";
import { Alert, View, StyleSheet, Platform } from "react-native";

import { CustomButton } from "./CustomButton";
import { ActivityIndicator, withTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const getPermissionAsync = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    Alert.alert(
      "Ошибка",
      "Извините, нам нужны разрешения на съемку, чтобы это сработало!"
    );

    return false;
  }

  return true;
};

export const PhotoPicker = withTheme(({ theme, onPick }) => {
  const [image, setImage] = useState(null);

  const { wrapper, imageWrapper } = styles;

  const takePhoto = async () => {
    const hasPermissions = await getPermissionAsync();

    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });

    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={wrapper}>
      <CustomButton
        title="Сделать фото"
        onClick={takePhoto}
        color={theme.colors.primary}
        buttonStyle={{ marginBottom: 15 }}
        icon={
          <Ionicons
            name="ios-camera"
            size={28}
            style={{
              marginRight: 5,
              marginBottom: -2,
              color: Platform.OS === "android" ? "#fff" : theme.colors.primary
            }}
          />
        }
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={imageWrapper}
          PlaceholderContent={<ActivityIndicator />}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { marginBottom: 10 },
  imageWrapper: {
    width: "100%",
    height: 200,
    marginTop: 20
  }
});
