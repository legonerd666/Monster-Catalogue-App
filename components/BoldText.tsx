import React from "react";
import { Text, StyleSheet } from "react-native";

const BoldText = (props: any) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "caveat-bold",
    fontSize: 20,
  },
});

export default BoldText;
