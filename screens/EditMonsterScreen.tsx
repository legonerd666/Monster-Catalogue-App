import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView, Alert, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import Colors from "../constants/Colors";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import ColorPicker from "react-native-wheel-color-picker";

const EditMonsterScreen = (props: any) => {
  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [dataManipulation, setDataManipulation] = useState(
    new DataManipulation()
  );

  const [name, setName] = useState("Unknown");
  const [dangerLevel, setDangerLevel] = useState("Unknown");
  const [species, setSpecies] = useState("Unknown");
  const [color, setColor] = useState("Unknown");
  const [appearance, setAppearance] = useState("Unknown");
  const [size, setSize] = useState("Unknown");
  const [statistics, setStatistics] = useState("Unknown");
  const [abilities, setAbilities] = useState("Unknown");
  const [description, setDescription] = useState("Unknown");
  const [habitat, setHabitat] = useState("Unknown");
  const [notes, setNotes] = useState("No Notes");
  const [bgcolor, setBgcolor] = useState("#fff");
  const [picture, setPicture] = useState("N/A");

  const [monster, setMonster] = useState({
    id: "-1",
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
    bgcolor: "#ffffff",
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

  const saveHandler = () => {
    Alert.alert(
      "Save Edits?",
      "Are you sure you want to save your edited entry?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const newMonsters = dataManipulation.getData();

            const editedMonster = {
              id: monster.id,
              name: name,
              dangerLevel: dangerLevel,
              species: species,
              color: color,
              appearance: appearance,
              size: size,
              statistics: statistics,
              abilities: abilities,
              description: description,
              habitat: habitat,
              notes: notes,
              picture: picture,
              bgcolor: bgcolor,
            };

            const monsterToReplaceIndex = newMonsters.findIndex(
              (monsterById) => monsterById.id === monsterId
            );
            newMonsters[monsterToReplaceIndex] = editedMonster;
            dataManipulation.setData(newMonsters);
            dataManipulation.saveData();
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  const deleteHandler = () => {
    Alert.alert(
      "Delete Entry?",
      "Are you sure you want to delete this entry?\nIt will be permanently deleted from your monsters.",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const newMonsters = dataManipulation.getData();
            const monsterToDeleteIndex = newMonsters.findIndex(
              (monsterById) => monsterById.id === monsterId
            );
            newMonsters.splice(monsterToDeleteIndex, 1);
            dataManipulation.setData(newMonsters);
            dataManipulation.saveData();
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    props.navigation.setParams({ save: () => saveHandler() });
  }, [
    name,
    dangerLevel,
    species,
    color,
    appearance,
    size,
    statistics,
    abilities,
    description,
    habitat,
    notes,
    bgcolor,
  ]);

  useEffect(() => {
    props.navigation.setParams({ delete: () => deleteHandler() });
    setName(monster.name);
    setDangerLevel(monster.dangerLevel);
    setSpecies(monster.species);
    setColor(monster.color);
    setAppearance(monster.appearance);
    setSize(monster.size);
    setStatistics(monster.statistics);
    setAbilities(monster.abilities);
    setDescription(monster.description);
    setHabitat(monster.habitat);
    setNotes(monster.notes);
    setBgcolor(monster.bgcolor);
  }, [dataIsLoaded]);

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
    <View>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.introContainer}>
            <BoldText style={styles.intro}>Edit Creature: </BoldText>
          </View>
          <DefaultText>Name: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Name..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setName(text);
              }}
              defaultValue={monster.name}
            />
          </View>
          <DefaultText>Danger Level: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Danger Level..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setDangerLevel(text);
              }}
              defaultValue={monster.dangerLevel}
            />
          </View>
          <DefaultText>Species: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Species..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setSpecies(text);
              }}
              defaultValue={monster.species}
            />
          </View>
          <DefaultText>Color: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Color..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setColor(text);
              }}
              defaultValue={monster.color}
            />
          </View>
          <DefaultText>Size: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Size..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setSize(text);
              }}
              defaultValue={monster.size}
            />
          </View>
          <DefaultText>Known Habitat: </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Known Habitat..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setHabitat(text);
              }}
              defaultValue={monster.habitat}
            />
          </View>
          <View style={styles.divider}></View>
          <DefaultText>Stats: </DefaultText>
          <View style={styles.inputContainerLarge}>
            <TextInput
              placeholder="Enter Stats..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setStatistics(text);
              }}
              defaultValue={monster.statistics}
              multiline={true}
            />
          </View>
          <DefaultText>Abilities: </DefaultText>
          <View style={styles.inputContainerLarge}>
            <TextInput
              placeholder="Enter Abilities..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setAbilities(text);
              }}
              defaultValue={monster.abilities}
              multiline={true}
            />
          </View>
          <DefaultText>Appearance: </DefaultText>
          <View style={styles.inputContainerLarge}>
            <TextInput
              placeholder="Enter Appearance..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setAppearance(text);
              }}
              defaultValue={monster.appearance}
              multiline={true}
            />
          </View>
          <DefaultText>Description: </DefaultText>
          <View style={styles.inputContainerLarge}>
            <TextInput
              placeholder="Enter Description..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setDescription(text);
              }}
              defaultValue={monster.description}
              multiline={true}
            />
          </View>
          <DefaultText>Notes: </DefaultText>
          <View style={styles.inputContainerLarge}>
            <TextInput
              placeholder="Enter Notes..."
              placeholderTextColor={"black"}
              onChangeText={(text) => {
                setNotes(text);
              }}
              defaultValue={monster.notes}
              multiline={true}
            />
          </View>
          <View style={styles.divider}></View>
          <DefaultText>Background Color: </DefaultText>
          <View style={styles.colorPicker}>
            <ColorPicker
              color={monster.bgcolor}
              onColorChangeComplete={(color) => {
                setBgcolor(color);
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

EditMonsterScreen.navigationOptions = (navigationData: any) => {
  const name = navigationData.navigation.getParam("monsterName");
  return {
    headerTitle: name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save-sharp"
          onPress={() => {
            navigationData.navigation.getParam("save")();
          }}
        />
        <Item
          title="Delete"
          iconName="trash"
          onPress={() => {
            navigationData.navigation.getParam("delete")();
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
  intro: {
    fontSize: 30,
  },
  notice: {
    fontSize: 15,
  },
  inputContainer: {
    backgroundColor: Colors.accentColor,
    width: "70%",
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },
  inputContainerLarge: {
    backgroundColor: Colors.accentColor,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 5,
  },
  divider: {
    height: 1,
    width: "70%",
    backgroundColor: "#CED0CE",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  introContainer: {
    marginBottom: 20,
  },
});

export default EditMonsterScreen;
