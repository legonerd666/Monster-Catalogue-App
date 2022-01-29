import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MonsterNavigator from "./navigation/MonsterNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "caveat": require("./assets/fonts/Caveat-Regular.ttf"),
    "caveat-bold": require("./assets/fonts/Caveat-Bold.ttf"),
    "caveat-medium": require("./assets/fonts/Caveat-Medium.ttf"),
    "caveat-semi-bold": require("./assets/fonts/Caveat-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MonsterNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
