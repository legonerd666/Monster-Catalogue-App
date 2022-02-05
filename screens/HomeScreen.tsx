import React, { useState } from "react";
import { View, TouchableNativeFeedback, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import DataManipulation from "../functions/DataManipulation";

const HomeScreen = (props: any) => {
  const [dataManipulation, setDataManipulation] = useState(
    new DataManipulation()
  );

  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.navigation.navigate({
          routeName: "Monsters",
        });
      }}
    >
      <View style={styles.screen}>
        <DefaultText>Ithrell's Catalogue of Critters and Beasts </DefaultText>
        <DefaultText style={styles.notice}>(Tap to Open)</DefaultText>
        {/* <TouchableNativeFeedback onPress={dataManipulation.saveData}>
          <View style={styles.testBtn}>
            <DefaultText>Save Test Data</DefaultText>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={dataManipulation.storeLoadedData}>
          <View style={styles.testBtn}>
            <DefaultText>Load Test Data</DefaultText>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={dataManipulation.resetData}>
          <View style={styles.testBtn}>
            <DefaultText>Reset Test Data</DefaultText>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={dataManipulation.clearData}>
          <View style={styles.testBtn}>
            <DefaultText>Clear Test Data</DefaultText>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            console.log(dataManipulation.getData());
          }}
        >
          <View style={styles.testBtn}>
            <DefaultText>Print Test Data</DefaultText>
          </View>
        </TouchableNativeFeedback> */}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notice: {
    fontSize: 10,
  },
  testBtn: {
    backgroundColor: "#aaa",
    marginVertical: 5,
  },
});

export default HomeScreen;
