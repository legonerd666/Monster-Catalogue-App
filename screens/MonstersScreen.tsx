import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MonstersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Monster Screen</Text>
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

export default MonstersScreen;
