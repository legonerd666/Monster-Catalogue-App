import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MonsterDetailsScreen from "../screens/MonsterDetailsScreen";
import MonstersScreen from "../screens/MonstersScreen";
import Colors from "../constants/Colors";
import AddEntryScreen from "../screens/AddEntryScreen";
import EditMonsterScreen from "../screens/EditMonsterScreen";

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
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : Colors.accentColor,
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
      headerTitleStyle: {
        fontFamily: "caveat-bold",
        fontSize: 30,
        marginRight: 30,
      },
    },
  }
);

export default createAppContainer(MonsterNavigator);
