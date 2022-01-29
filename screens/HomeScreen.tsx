import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = (props: any) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Monsters Screen"
        onPress={() => {
          props.navigation.navigate("Monsters");
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
