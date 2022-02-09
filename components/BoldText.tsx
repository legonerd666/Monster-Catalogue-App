import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const BoldText = (props: any) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>
      {props.children + " "}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "caveat-bold",
    fontSize: 20,
    color: Colors.primaryColor,
  },
});

export default BoldText;
