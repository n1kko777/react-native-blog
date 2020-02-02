import React, { useState } from "react";

import { Provider } from "react-redux";
import store from "./src/store";

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

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
