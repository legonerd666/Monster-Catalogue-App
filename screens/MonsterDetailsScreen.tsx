import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MonsterDetailsScreen = (props: any) => {
  const dataManipulation = new DataManipulation();

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [monster, setMonster] = useState({
    name: "Failed to read",
    dangerLevel: "Failed to read",
    species: "Failed to read",
    color: "Failed to read",
    appearance: "Failed to read",
    size: "Failed to read",
    statistics: "Failed to read",
    abilities: "Failed to read",
    description: "Failed to read",
    habitat: "Failed to read",
    notes: "Failed to read",
  });

  const monsterId = props.navigation.getParam("monsterId");

  const finishHandler = () => {
    setMonster(
      dataManipulation
        .getData()
        .find((monsterById) => monsterById.id === monsterId)
    );
    setDataIsLoaded(true);
  };

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={finishHandler}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Name:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.name}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Danger Level:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.dangerLevel}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Species:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.species}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Color:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.color}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Size:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.size}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Known Habitat:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.habitat}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Stats:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.statistics}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Abilities:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.abilities}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Appearance:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.appearance}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Description:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.description}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeTitle
                : styles.title
            }
          >
            Notes:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.largeInfo
                : styles.info
            }
          >
            {monster.notes}
          </DefaultText>
        </View>
      </View>
    </ScrollView>
  );
};

MonsterDetailsScreen.navigationOptions = (navigationData: any) => {
  const name = navigationData.navigation.getParam("monsterName");
  const id = navigationData.navigation.getParam("monsterId");
  return {
    headerTitle: name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Edit"
          iconName="create"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Edit",
              params: {
                monsterId: id,
                monsterName: name,
              },
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  largeTitle: {
    fontSize: 50,
  },
  title: {
    fontSize: 30,
  },
  infoBlockContainer: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 30,
  },
  largeInfo: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
  },
  info: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
  },
});

export default MonsterDetailsScreen;
