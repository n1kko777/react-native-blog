import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Image } from "react-native-elements";
import { Alert, View, StyleSheet } from "react-native";

import { CustomButton } from "./CustomButton";
import { ActivityIndicator } from "react-native-paper";

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

export const PhotoPicker = ({}) => {
  const [image, setImage] = useState(null);

  const { wrapper, imageWrapper } = styles;

  const takePhoto = async () => {
    const hasPermissions = await getPermissionAsync();

    if (!hasPermissions) {
      return;
    }

    const img = ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });

    console.log("img :", img);
  };

  return (
    <View style={wrapper}>
      <CustomButton title="Сделать фото" onClick={takePhoto} />
      {image && (
        <Image
          source={{ uri: image }}
          style={imageWrapper}
          PlaceholderContent={<ActivityIndicator />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 10 },
  imageWrapper: {
    width: 200,
    height: 200,
    marginTop: 20
  }
});
