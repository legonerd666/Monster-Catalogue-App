import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
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
          <View style={styles.introContainer}>
            <BoldText
              style={
                Dimensions.get("window").width > 600
                  ? styles.introLarge
                  : styles.intro
              }
            >
              Enter New Creature Data:
            </BoldText>
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Name:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Name..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setName(text);
              }}
              defaultValue=""
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Danger Level:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Danger Level..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setDangerLevel(text);
              }}
              defaultValue=""
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Species:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Species..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setSpecies(text);
              }}
              defaultValue=""
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Color:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Color..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setColor(text);
              }}
              defaultValue=""
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Size:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Size..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setSize(text);
              }}
              defaultValue=""
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Known Habitat:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerLarge
                : styles.inputContainer
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Known Habitat..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setHabitat(text);
              }}
              defaultValue=""
            />
          </View>
          <View style={styles.divider}></View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Stats:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerMultilineLarge
                : styles.inputContainerMultiline
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Stats..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setStatistics(text);
              }}
              defaultValue=""
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Abilities:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerMultilineLarge
                : styles.inputContainerMultiline
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Abilities..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setAbilities(text);
              }}
              defaultValue=""
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Appearance:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerMultilineLarge
                : styles.inputContainerMultiline
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Appearance..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setAppearance(text);
              }}
              defaultValue=""
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Description:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerMultilineLarge
                : styles.inputContainerMultiline
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Description..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setDescription(text);
              }}
              defaultValue=""
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Notes:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.inputContainerMultilineLarge
                : styles.inputContainerMultiline
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? styles.inputTextLarge
                  : styles.inputText
              }
              placeholder="Enter Notes..."
              placeholderTextColor={Colors.primaryColor}
              onChangeText={(text) => {
                setNotes(text);
              }}
              defaultValue=""
              multiline={true}
            />
          </View>
          <View style={styles.divider}></View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? styles.titleLarge
                : styles.title
            }
          >
            Background Color:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.colorPickerLarge
                : styles.colorPicker
            }
          >
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
    backgroundColor: Colors.accentColor,
  },
  intro: {
    fontSize: 30,
  },
  introLarge: {
    fontSize: 55,
  },
  inputContainer: {
    backgroundColor: Colors.textBoxColor,
    width: "70%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLarge: {
    backgroundColor: Colors.textBoxColor,
    width: "70%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },
  colorPickerLarge: {
    height: 200,
    width: "40%",
    marginBottom: 100,
  },
  inputContainerMultiline: {
    backgroundColor: Colors.textBoxColor,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLarge: {
    backgroundColor: Colors.textBoxColor,
    width: "70%",
    height: 200,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  divider: {
    height: 1,
    width: "70%",
    backgroundColor: "#BDC0BD",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  introContainer: {
    marginBottom: 20,
  },
  title: {},
  titleLarge: {
    fontSize: 50,
  },
  inputText: {
    fontSize: 16,
    color: Colors.primaryColor,
  },
  inputTextLarge: {
    fontSize: 25,
    color: Colors.primaryColor,
  },
});

export default AddEntryScreen;
