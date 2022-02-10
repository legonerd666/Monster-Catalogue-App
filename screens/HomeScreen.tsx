import React from "react";
import {
  View,
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const HomeScreen = (props: any) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.navigation.navigate({
          routeName: "Monsters",
        });
      }}
    >
      <View style={styles.screen}>
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? styles.largeIntro
              : styles.intro
          }
        >
          Ithrell's Catalogue of Critters and Beasts
        </DefaultText>
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? styles.largeNotice
              : styles.notice
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
  largeNotice: {
    fontSize: 30,
  },
  notice: {
    fontSize: 10,
  },
  largeIntro: { fontSize: 50 },
  intro: {},
});

export default HomeScreen;
