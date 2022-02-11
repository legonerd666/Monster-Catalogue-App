import React, { useState } from "react";
import { View, Switch, StyleSheet, Dimensions } from "react-native";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toggleMode } from "../store/actions/mode";

const SettingsScreen = (props: any) => {
  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  const dispatch = useDispatch();

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode, setIsDarkMode] = useState(mode === "dark" ? true : false);

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <View
        style={
          Dimensions.get("window").width > 600
            ? styles.settingContainerLarge
            : styles.settingContainer
        }
      >
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.settingTitleLargeDarkMode
                : styles.settingTitleLargeLightMode
              : isDarkMode
              ? styles.settingTitleDarkMode
              : styles.settingTitleLightMode
          }
        >
          Dark Mode:
        </DefaultText>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              true: Colors.textBoxColorDarkMode,
              false: "#e8e8e8",
            }}
            thumbColor={"gray"}
            value={isDarkMode}
            onValueChange={(newValue) => {
              toggleModeHandler();
              setIsDarkMode(newValue);
            }}
            style={
              Dimensions.get("window").width > 600
                ? styles.switchLarge
                : styles.switch
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorDarkMode,
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
  },
  settingContainerLarge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 100,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 100,
  },
  settingTitleLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 40,
  },
  settingTitleLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 40,
  },
  settingTitleDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  settingTitleLightMode: {
    color: Colors.accentColorLightMode,
  },
  switchLarge: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  switch: {},
  switchContainer: {},
});

export default SettingsScreen;
