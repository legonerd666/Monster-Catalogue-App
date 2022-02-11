import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MonsterNavigator from "./navigation/MonsterNavigator";
import { createStore, combineReducers } from "redux";
import modeReducer from "./store/reducers/mode";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  mode: modeReducer,
});

const store = createStore(rootReducer);

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

  return (
    <Provider store={store}>
      <MonsterNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
