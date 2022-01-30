import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";
import { FadeFromBottomAndroid } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets";
import { MONSTERS } from "../data/monster-data";
import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";

const MonstersScreen = (props: any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          props.navigation.navigate({
            routeName: "MonsterDetails",
            params: {
              monsterId: itemData.item.id,
            },
          });
        }}
      >
        <View style={styles.gridItem}>
          <DefaultText>{itemData.item.name}</DefaultText>
        </View>
      </TouchableNativeFeedback>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={MONSTERS} renderItem={renderGridItem} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "flex-end",
  },
});

export default MonstersScreen;
