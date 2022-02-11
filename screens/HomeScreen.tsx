import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import {
  View,
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import * as Font from "expo-font";
import { toggleMode } from "../store/actions/mode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode, setIsDarkMode] = useState(mode === "dark" ? true : false);

  useEffect(() => {
    setIsDarkMode(mode === "dark" ? true : false);
  });

  const [isModeLoaded, setIsModeLoaded] = useState(false);

  const dummyFetch = () => {
    return Font.loadAsync({
      "caveat": require("../assets/fonts/Caveat-Regular.ttf"),
    });
  };

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  const dispatch = useDispatch();

  const modeHandler = async () => {
    let settings = { mode: "-1" };
    try {
      const jsonValue = await AsyncStorage.getItem("Settings");
      if (jsonValue != null) {
        settings = JSON.parse(jsonValue);
      } else {
        try {
          const jsonValue = JSON.stringify({ mode: "dark" });
          await AsyncStorage.setItem("Settings", jsonValue);
        } catch (e) {
          alert(e);
        }
        modeHandler();
      }
    } catch (e) {
      alert(e);
    }

    if (settings.mode === "light") {
      await toggleModeHandler();
      await toggleModeHandler();
    } else {
      await toggleModeHandler();
    }

    await setIsModeLoaded(true);
  };

  if (!isModeLoaded) {
    return (
      <AppLoading
        startAsync={dummyFetch}
        onFinish={() => {
          modeHandler();
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.navigation.navigate({
          routeName: "Monsters",
        });
      }}
    >
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeIntroDarkMode
                : styles.largeIntroLightMode
              : isDarkMode
              ? styles.introDarkMode
              : styles.introLightMode
          }
        >
          Ithrell's Catalogue of Critters and Beasts
        </DefaultText>
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeNoticeDarkMode
                : styles.largeNoticeLightMode
              : isDarkMode
              ? styles.noticeDarkMode
              : styles.noticeLightMode
          }
        >
          (Tap to Open)
        </DefaultText>
      </View>
    </TouchableNativeFeedback>
  );
};

HomeScreen.navigationOptions = (navigationData: any) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          style={{ marginLeft: 8 }}
          title="Settings"
          iconName="settings-outline"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Settings",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screenDarkMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColorDarkMode,
  },
  screenLightMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColorLightMode,
  },
  largeNoticeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 30,
  },
  largeNoticeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 30,
  },
  noticeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 10,
  },
  noticeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 10,
  },
  largeIntroDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
  },
  largeIntroLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
  },
  introDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  introLightMode: {
    color: Colors.accentColorLightMode,
  },
});

export default HomeScreen;
