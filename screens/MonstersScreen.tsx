import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, Button, StyleSheet } from "react-native";
import MonsterGridTile from "../components/MonsterGridTile";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";

const MonstersScreen = (props: any) => {
  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

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
      setFilteredMonsters(dataManipulation.getData);
      return;
    }
    const tempMonsters: any[] = [];
    dataManipulation.getData().forEach((monster: any) => {
      if (monster.name.toLowerCase().includes(text.toLowerCase())) {
        tempMonsters.push(monster);
      }
    });
    setFilteredMonsters(tempMonsters);
  };

  const [dataManipulation, setDataManipulation] = useState(
    new DataManipulation()
  );

  const [filteredMonsters, setFilteredMonsters] = useState(
    dataManipulation.getData
  );

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    dataManipulation.storeLoadedData();
  }, [dataManipulation, filteredMonsters]);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => {
          setFilteredMonsters(dataManipulation.getData);
          setDataIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

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
    paddingBottom: 120,
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
