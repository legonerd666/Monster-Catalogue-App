import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import MonsterDetailsScreen from "../screens/MonsterDetailsScreen";
import MonstersScreen from "../screens/MonstersScreen";

const MonsterNavigator = createStackNavigator({
  Home: HomeScreen,
  Monsters: MonstersScreen,
  MonsterDetails: MonsterDetailsScreen,
});

export default createAppContainer(MonsterNavigator);
