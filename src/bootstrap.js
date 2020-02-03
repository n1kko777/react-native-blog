import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
      "open-bold-italic": require("../assets/fonts/OpenSans-BoldItalic.ttf"),
      "open-extra-bold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
      "open-extra-bold-italic": require("../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
      "open-italic": require("../assets/fonts/OpenSans-Italic.ttf"),
      "open-light": require("../assets/fonts/OpenSans-Light.ttf"),
      "open-light-italic": require("../assets/fonts/OpenSans-LightItalic.ttf"),
      "open-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "open-semibold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
      "open-semibold-italic": require("../assets/fonts/OpenSans-SemiBoldItalic.ttf")
    });

    await DB.init();

    console.log("Database started...");
  } catch (error) {
    console.error("Error: ", error);
  }
}
