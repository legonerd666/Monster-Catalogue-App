import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView, Button, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import Colors from "../constants/Colors";

const AddEntryScreen = (props: any) => {
  const [name, setName] = useState("Unknown");
  const [species, setSpecies] = useState("Unknown");
  const [color, setColor] = useState("Unknown");
  const [appearance, setAppearance] = useState("Unknown");
  const [size, setSize] = useState("Unknown");
  const [statistics, setStatistics] = useState("Unknown");
  const [abilities, setAbilities] = useState("Unknown");
  const [description, setDescription] = useState("Unknown");
  const [habitat, setHabitat] = useState("Unknown");
  const [notes, setNotes] = useState("No Notes");
  const [bgcolor, setBgcolor] = useState("#ffffff");
  const [picture, setPicture] = useState("N/A");

  const saveHandler = (props: any) => {
    // const newMonster = new Monster(
    //   Monsters.length + 1,
    //   name,
    //   species,
    //   color,
    //   appearance,
    //   size,
    //   statistics,
    //   abilities,
    //   description,
    //   habitat,
    //   notes,
    //   picture,
    //   bgcolor
    // );
  };

  useEffect(() => {
    data = require("../data/monster-data.json");
    setMonsters(data);
  });

  let data = require("../data/monster-data.json");

  const [Monsters, setMonsters] = useState(data);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.introContainer}>
          <BoldText style={styles.intro}>Enter New Creature Data: </BoldText>
        </View>
        <DefaultText>Name: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Name..."
            onChangeText={(text) => {
              setName(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Species: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Species..."
            onChangeText={(text) => {
              setSpecies(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Color: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Color..."
            onChangeText={(text) => {
              setColor(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Appearance: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Appearance..."
            onChangeText={(text) => {
              setAppearance(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Size: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Size..."
            onChangeText={(text) => {
              setSize(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Stats: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Stats..."
            onChangeText={(text) => {
              setStatistics(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Abilities: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Abilities..."
            onChangeText={(text) => {
              setAbilities(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Description: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Description..."
            onChangeText={(text) => {
              setDescription(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Known Habitat: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Known Habitat..."
            onChangeText={(text) => {
              setHabitat(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Notes: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Notes..."
            onChangeText={(text) => {
              setNotes(text);
            }}
            defaultValue=""
          />
        </View>
        <DefaultText>Background Color: </DefaultText>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Background Color Hex Code..."
            onChangeText={(text) => {
              setBgcolor(text);
            }}
            defaultValue=""
          />
        </View>
        <Button title="Save" onPress={saveHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  intro: {
    fontSize: 30,
  },
  introContainer: {},
  inputContainer: {
    backgroundColor: Colors.accentColor,
    width: "70%",
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
});

export default AddEntryScreen;
