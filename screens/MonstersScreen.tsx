import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";
import { MONSTERS } from "../data/monster-data";
import MonsterGridTile from "../components/MonsterGridTile";
import Monster from "../models/monster";

const MonstersScreen = (props: any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <MonsterGridTile
        name={itemData.item.name}
        bgcolor={itemData.item.bgcolor}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MonsterDetails",
            params: {
              monsterId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const Filter = (text: string) => {
    if (text === "") {
      setFilteredMonsters(MONSTERS);
      return filteredMonsters;
    }
    const tempMonsters: Monster[] = [];
    MONSTERS.forEach((monster) => {
      if (monster.name.toLowerCase().includes(text.toLowerCase())) {
        tempMonsters.push(monster);
      }
    });
    setFilteredMonsters(tempMonsters);
    return filteredMonsters;
  };

  const [filteredMonsters, setFilteredMonsters] = useState(MONSTERS);

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Filter by Name..."
          onChangeText={Filter}
          defaultValue=""
        />
      </View>
      <FlatList
        data={filteredMonsters}
        renderItem={renderGridItem}
        numColumns={1}
        extraData={filteredMonsters}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBar: {},
});

export default MonstersScreen;
