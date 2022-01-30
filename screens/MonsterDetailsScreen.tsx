import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { MONSTERS } from "../data/monster-data";

const MonsterDetailsScreen = (props: any) => {
  const monsterId = props.navigation.getParam("monsterId");

  const selectedMonster = MONSTERS.find((monster) => monster.id === monsterId);
  return (
    <View style={styles.screen}>
      <View>
        <Text>{selectedMonster?.name}</Text>
      </View>
    </View>
  );
};

MonsterDetailsScreen.navigationOptions = (navigationData: any) => {
  const monsterId = navigationData.navigation.getParam("monsterId");
  const selectedMonster = MONSTERS.find((monster) => monster.id === monsterId);
  return {
    headerTitle: selectedMonster?.name,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MonsterDetailsScreen;
