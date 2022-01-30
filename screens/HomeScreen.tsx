import React from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const HomeScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Monsters Screen"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Monsters",
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
