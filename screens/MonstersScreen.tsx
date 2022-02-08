import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import MonsterGridTile from "../components/MonsterGridTile";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

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
              monsterName: itemData.item.name,
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

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

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
      <View
        style={
          Dimensions.get("window").width > 600
            ? styles.searchBarContainerLarge
            : styles.searchBarContainer
        }
      >
        <TextInput
          placeholder="Filter by Name..."
          onChangeText={Filter}
          defaultValue=""
          placeholderTextColor={"black"}
          style={
            Dimensions.get("window").width > 600
              ? styles.largeTextInput
              : styles.textInput
          }
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={filteredMonsters}
          renderItem={renderGridItem}
          numColumns={Dimensions.get("window").width > 600 ? 2 : 1}
          extraData={filteredMonsters}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

MonstersScreen.navigationOptions = (navigationData: any) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add New"
          iconName="add"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "AddEntry",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    paddingBottom: 120,
  },
  searchBarContainerLarge: {
    height: 80,
    borderRadius: 50,
    width: "78%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
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
  separator: {
    height: 1,
    width: "90%",
    backgroundColor: "#CED0CE",
    alignSelf: "center",
  },
  largeTextInput: { fontSize: 25, marginLeft: 20 },
  textInput: {},
});

export default MonstersScreen;
