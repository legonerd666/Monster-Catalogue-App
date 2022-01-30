import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props: any) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "caveat",
    fontSize: 20,
  },
});

export default DefaultText;
