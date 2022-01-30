import React from "react";
import { View, TouchableNativeFeedback, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

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
        <DefaultText>Ithrell's Catalogue of Critters and Beasts </DefaultText>
        <DefaultText style={styles.notice}>(Tap to Open)</DefaultText>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notice: {
    fontSize: 10,
  },
});

export default HomeScreen;
