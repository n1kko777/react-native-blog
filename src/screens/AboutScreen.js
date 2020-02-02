import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";

export const AboutScreen = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text style={{ fontFamily: "open-semibold" }} h2>
        Личный блог
      </Text>
      <Text style={{ marginTop: 20, fontFamily: "open-regular" }}>
        Версия приложения:{" "}
        <Text style={{ fontFamily: "open-semibold" }}>1.0.0</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 25,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

AboutScreen.navigationOptions = ({ navigation }) => ({
  title: "О приложении",
  headerTitle: "О приложении",
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
