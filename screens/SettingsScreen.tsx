import React, { useState } from "react";
import { View, Switch, StyleSheet, Dimensions } from "react-native";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const SettingsScreen = (props: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <View style={styles.screen}>
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
              ? styles.settingTitleLarge
              : styles.settingTitle
          }
        >
          Dark Mode:
        </DefaultText>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              true: Colors.textBoxColor,
              false: Colors.primaryColor,
            }}
            thumbColor={"gray"}
            value={isDarkMode}
            onValueChange={(newValue) => setIsDarkMode(newValue)}
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
  screen: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.accentColor,
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
  settingTitleLarge: {
    fontSize: 40,
  },
  settingTitle: {},
  switchLarge: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  switch: {},
  switchContainer: {},
});

export default SettingsScreen;
