import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MONSTERS } from "../data/monster-data";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import Monster from "../models/monster";

const MonsterDetailsScreen = (props: any) => {
  const monsterId = props.navigation.getParam("monsterId");

  const renderData = (itemData: any) => {
    return (
      <View style={styles.dataItem}>
        <BoldText style={styles.category}>{itemData.item.category}</BoldText>
        <DefaultText style={styles.data}>{itemData.item.data}</DefaultText>
      </View>
    );
  };

  const selectedMonster = MONSTERS.find((monster) => monster.id === monsterId);

  const [monsterData, setmonsterData] = useState([
    { category: "Name: ", data: selectedMonster?.name, key: 1 },
    { category: "Species: ", data: selectedMonster?.species, key: 2 },
    { category: "Color: ", data: selectedMonster?.color, key: 3 },
    { category: "Appearance: ", data: selectedMonster?.appearance, key: 4 },
    { category: "Size: ", data: selectedMonster?.size, key: 5 },
    { category: "Stats: ", data: selectedMonster?.statistics, key: 6 },
    { category: "Abilities: ", data: selectedMonster?.abilities, key: 7 },
    { category: "Description: ", data: selectedMonster?.description, key: 8 },
    { category: "Known Habitat: ", data: selectedMonster?.habitat, key: 9 },
    { category: "Notes: ", data: selectedMonster?.notes, key: 10 },
  ]);
  return (
    <View style={styles.screen}>
      <FlatList data={monsterData} renderItem={renderData} />
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
    margin: 25,
  },
  dataItem: {
    alignItems: "center",
    marginVertical: 15,
  },
  ability: {},
  category: {
    fontSize: 30,
  },
  data: {},
});

export default MonsterDetailsScreen;
