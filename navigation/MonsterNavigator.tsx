import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import MonsterDetailsScreen from "../screens/MonsterDetailsScreen";
import MonstersScreen from "../screens/MonstersScreen";
import Colors from "../constants/Colors";

const MonsterNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Monster Catalogue",
      },
    },
    Monsters: {
      screen: MonstersScreen,
      navigationOptions: {
        headerTitle: "Monsters",
      },
    },
    MonsterDetails: {
      screen: MonsterDetailsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android"
              ? Colors.primaryColor
              : Colors.accentColor,
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
      },
    },
  },
  {
    //initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : Colors.accentColor,
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MonsterNavigator);
