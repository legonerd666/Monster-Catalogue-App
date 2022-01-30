import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import DefaultText from "./DefaultText";

const MonsterGridTile = (props: any) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.bgcolor } }}
        >
          <DefaultText style={styles.text} numberOfLines={1}>
            {props.name}
          </DefaultText>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "flex-end",
    width: 280,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    elevation: 5,
    padding: 15,
  },
  text: {
    fontSize: 25,
  },
});

export default MonsterGridTile;
