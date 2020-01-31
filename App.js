import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
        startAsync={bootstrap}
      />
    );
  }

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
