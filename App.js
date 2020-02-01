import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";

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

  return <AppNavigation />;
}
