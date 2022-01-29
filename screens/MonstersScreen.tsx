import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MonstersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Monster Screen</Text>
      <Button
        title="Go to Monster Detail Screen"
        onPress={() => {
          props.navigation.navigate("MonsterDetails");
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

export default MonstersScreen;
