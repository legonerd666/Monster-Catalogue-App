import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MonsterDetailsScreen from "../screens/MonsterDetailsScreen";
import MonstersScreen from "../screens/MonstersScreen";
import Colors from "../constants/Colors";
import AddEntryScreen from "../screens/AddEntryScreen";
import EditMonsterScreen from "../screens/EditMonsterScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MonsterNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Ithrell's Catalogue of Critters and Beasts ",
      },
    },
    Monsters: {
      screen: MonstersScreen,
      navigationOptions: {
        headerTitle: "Critters and Beasts ",
      },
    },
    MonsterDetails: {
      screen: MonsterDetailsScreen,
    },
    AddEntry: {
      screen: AddEntryScreen,
      navigationOptions: {
        headerTitle: "Add New Entry",
      },
    },
    Edit: {
      screen: EditMonsterScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? "black" : Colors.accentColor,
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.primaryColor : Colors.primaryColor,
      headerTitleStyle: {
        fontFamily: "caveat-bold",
        fontSize: 30,
        marginRight: 30,
        textAlign: "center",
      },
    },
  }
);

export default createAppContainer(MonsterNavigator);
