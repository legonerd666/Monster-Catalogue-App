import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
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
