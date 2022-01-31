import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, Button, StyleSheet } from "react-native";
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
      setFilteredMonsters(data);
      return filteredMonsters;
    }
    const tempMonsters: Monster[] = [];
    data.forEach((monster: any) => {
      if (monster.name.toLowerCase().includes(text.toLowerCase())) {
        tempMonsters.push(monster);
      }
    });
    setFilteredMonsters(tempMonsters);
    return filteredMonsters;
  };

  useEffect(() => {
    data = require("../data/monster-data.json");
    setMonsters(data);
  });

  let data = require("../data/monster-data.json");

  const [Monsters, setMonsters] = useState(data);

  const [filteredMonsters, setFilteredMonsters] = useState(Monsters);

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Filter by Name..."
          onChangeText={Filter}
          defaultValue=""
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={filteredMonsters}
          renderItem={renderGridItem}
          numColumns={1}
          extraData={filteredMonsters}
        />
      </View>
      <Button
        title="Temp add new"
        onPress={() => {
          props.navigation.navigate({ routeName: "AddEntry" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
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
  list: {
    width: "80%",
    alignSelf: "center",
  },
});

export default MonstersScreen;
