import React, { useState } from "react";
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

  const Filter = (props: any) => {
    // setFilter(props.nativeEvent.text);
    // const newFilteredMonsters: Monster[] = [];
    // filteredMonsters.forEach((item) => {
    //   if (item.name.includes(filter)) {
    //     newFilteredMonsters.push(item);
    //   }
    //   setFilteredMonsters(newFilteredMonsters);
    // });
  };

  const [filteredMonsters, setFilteredMonsters] = useState(MONSTERS);

  const [filter, setFilter] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Filter by Name..."
          onChange={Filter}
          defaultValue=""
        />
      </View>
      <FlatList data={MONSTERS} renderItem={renderGridItem} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  searchBarContainer: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBar: {},
});

export default MonstersScreen;
