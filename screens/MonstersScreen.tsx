import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MONSTERS } from "../data/monster-data";
import MonsterGridTile from "../components/MonsterGridTile";

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

  return (
    <View style={styles.screen}>
      <FlatList data={MONSTERS} renderItem={renderGridItem} numColumns={1} />
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

export default MonstersScreen;
