import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useSelector, RootStateOrAny } from "react-redux";

const MonsterDetailsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

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
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Name:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.name}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Danger Level:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.dangerLevel}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Species:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.species}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Color:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.color}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Size:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.size}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Known Habitat:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.habitat}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Stats:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.statistics}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Abilities:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.abilities}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Appearance:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.appearance}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Description:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
          >
            {monster.description}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Notes:
          </BoldText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
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
  screenDarkMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.accentColorDarkMode,
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.accentColorLightMode,
  },
  largeTitleDarkMode: {
    color: Colors.primaryColorDarkMode,
    fontSize: 50,
  },
  largeTitleLightMode: {
    color: Colors.primaryColorLightMode,
    fontSize: 50,
  },
  titleDarkMode: {
    color: Colors.primaryColorDarkMode,
    fontSize: 30,
  },
  titleLightMode: {
    color: Colors.primaryColorLightMode,
    fontSize: 30,
  },
  infoBlockContainer: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 30,
  },
  largeInfoDarkMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.primaryColorDarkMode,
  },
  largeInfoLightMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.primaryColorLightMode,
  },
  infoDarkMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
    color: Colors.primaryColorDarkMode,
  },
  infoLightMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
    color: Colors.primaryColorLightMode,
  },
});

export default MonsterDetailsScreen;
