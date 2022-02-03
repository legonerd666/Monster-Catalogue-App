import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MonsterDetailsScreen = (props: any) => {
  const dataManipulation = new DataManipulation();

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [monster, setMonster] = useState({
    name: "Failed to read",
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
          <BoldText style={styles.title}>Name: </BoldText>
          <DefaultText style={styles.info}>{monster.name}</DefaultText>
        </View>
        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Species: </BoldText>
          <DefaultText style={styles.info}>{monster.species}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Color: </BoldText>
          <DefaultText style={styles.info}>{monster.color}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Appearance: </BoldText>
          <DefaultText style={styles.info}>{monster.appearance}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Size: </BoldText>
          <DefaultText style={styles.info}>{monster.size}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Stats: </BoldText>
          <DefaultText style={styles.info}>{monster.statistics}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Abilities: </BoldText>
          <DefaultText style={styles.info}>{monster.abilities}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Description: </BoldText>
          <DefaultText style={styles.info}>{monster.description}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Known Habitat: </BoldText>
          <DefaultText style={styles.info}>{monster.habitat}</DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText style={styles.title}>Notes: </BoldText>
          <DefaultText style={styles.info}>{monster.notes}</DefaultText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 30,
  },
  infoBlockContainer: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 30,
  },
  info: {
    fontSize: 22,
  },
});

export default MonsterDetailsScreen;
