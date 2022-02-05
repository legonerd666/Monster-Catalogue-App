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
import { v4 as uuid } from "uuid";

const AddEntryScreen = (props: any) => {
  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [dataManipulation, setDataManipulation] = useState(
    new DataManipulation()
  );

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
  const [bgcolor, setBgcolor] = useState("#fff");
  const [picture, setPicture] = useState("N/A");

  const saveHandler = () => {
    Alert.alert(
      "Save New Entry?",
      "Are you sure you want to save your new entry?",
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

            const newMonster = {
              id: uuid(),
              name: name,
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
            newMonsters.push(newMonster);
            dataManipulation.setData(newMonsters);
            dataManipulation.saveData();
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  useEffect(() => {
    props.navigation.setParams({ save: () => saveHandler() });
  }, [
    name,
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

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => {
          setDataIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          <View>
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
          <View style={styles.colorPicker}>
            <ColorPicker
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

AddEntryScreen.navigationOptions = (navigationData: any) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save-sharp"
          onPress={() => {
            navigationData.navigation.getParam("save")();
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
});

export default AddEntryScreen;
