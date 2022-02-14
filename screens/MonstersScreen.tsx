import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import MonsterGridTile from "../components/MonsterGridTile";
import DataManipulation from "../functions/DataManipulation";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { RootStateOrAny, useSelector } from "react-redux";
import { AdMobBanner } from "expo-ads-admob";

const MonstersScreen = (props: any) => {
  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const renderGridItem = (itemData: any) => {
    return (
      <MonsterGridTile
        name={itemData.item.name}
        bgcolor={itemData.item.bgcolor}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MonsterDetails",
            params: {
              monsterId: itemData.item.id,
              monsterName: itemData.item.name,
            },
          });
        }}
      />
    );
  };

  const Filter = (text: string) => {
    if (text === "") {
      setFilteredMonsters(dataManipulation.getData);
      return;
    }
    const tempMonsters: any[] = [];

    dataManipulation.getData().forEach((monster: any) => {
      if (monster.name.toLowerCase().includes(text.toLowerCase())) {
        tempMonsters.push(monster);
      }
    });

    setFilteredMonsters(tempMonsters);
  };

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const adsBannerId = useSelector(
    (state: RootStateOrAny) => state.ads.adBannerId
  );

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [dataManipulation] = useState(new DataManipulation());

  const [filteredMonsters, setFilteredMonsters] = useState(
    dataManipulation.getData
  );

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const [filterText, setFilterText] = useState("");

  const renderSeparator = () => {
    return (
      <View
        style={
          isDarkMode ? styles.separatorDarkMode : styles.separatorLightMode
        }
      />
    );
  };

  useEffect(() => {
    dataManipulation.storeLoadedData();
  }, [dataManipulation, filteredMonsters]);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => {
          setFilteredMonsters(dataManipulation.getData);
          setDataIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  if (dataManipulation.getData().length == 0) {
    return (
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={adsBannerId}
          servePersonalizedAds={false}
        />
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.noticeContainerLarge
              : styles.noticeContainer
          }
        >
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.noticeLargeDarkMode
                  : styles.noticeLargeLightMode
                : isDarkMode
                ? styles.noticeDarkMode
                : styles.noticeLightMode
            }
          >
            You don't seem to have any monsters, how about making a new entry?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate({
                routeName: "AddEntry",
              });
            }}
          >
            <View
              style={
                Dimensions.get("window").width > 600
                  ? styles.addButtonContainerLarge
                  : styles.addButtonContainer
              }
            >
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : styles.addButtonText
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  if (filteredMonsters.length == 0) {
    return (
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={adsBannerId}
          servePersonalizedAds={false}
        />
        <View
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.searchBarContainerLargeDarkMode
                : styles.searchBarContainerLargeLightMode
              : isDarkMode
              ? styles.searchBarContainerDarkMode
              : styles.searchBarContainerLightMode
          }
        >
          <TextInput
            placeholder="Filter by Name..."
            onChangeText={(text) => {
              setFilterText(text);
              Filter(text);
            }}
            defaultValue={filterText}
            placeholderTextColor={
              isDarkMode
                ? Colors.accentColorDarkMode
                : Colors.accentColorLightMode
            }
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTextInputDarkMode
                  : styles.largeTextInputLightMode
                : isDarkMode
                ? styles.textInputDarkMode
                : styles.textInputLightMode
            }
          />
        </View>
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.noticeContainerLarge
              : styles.noticeContainer
          }
        >
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.noticeLargeDarkMode
                  : styles.noticeLargeLightMode
                : isDarkMode
                ? styles.noticeDarkMode
                : styles.noticeLightMode
            }
          >
            You don't seem to have any monsters that match your search, how
            about making a new entry or checking your search for typos?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate({
                routeName: "AddEntry",
              });
            }}
          >
            <View
              style={
                Dimensions.get("window").width > 600
                  ? styles.addButtonContainerLarge
                  : styles.addButtonContainer
              }
            >
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : styles.addButtonText
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <AdMobBanner
        bannerSize="banner"
        adUnitID={adsBannerId}
        servePersonalizedAds={false}
      />
      <View
        style={
          Dimensions.get("window").width > 600
            ? isDarkMode
              ? styles.searchBarContainerLargeDarkMode
              : styles.searchBarContainerLargeLightMode
            : isDarkMode
            ? styles.searchBarContainerDarkMode
            : styles.searchBarContainerLightMode
        }
      >
        <TextInput
          placeholder="Filter by Name..."
          onChangeText={(text) => {
            setFilterText(text);
            Filter(text);
          }}
          defaultValue={filterText}
          placeholderTextColor={
            isDarkMode
              ? Colors.accentColorDarkMode
              : Colors.accentColorLightMode
          }
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeTextInputDarkMode
                : styles.largeTextInputLightMode
              : isDarkMode
              ? styles.textInputDarkMode
              : styles.textInputLightMode
          }
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={filteredMonsters}
          renderItem={renderGridItem}
          numColumns={Dimensions.get("window").width > 600 ? 2 : 1}
          extraData={filteredMonsters}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

MonstersScreen.navigationOptions = (navigationData: any) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add New"
          iconName="add"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "AddEntry",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screenDarkMode: {
    width: "100%",
    flex: 1,
    paddingBottom: 120,
    backgroundColor: Colors.primaryColorDarkMode,
    alignItems: "center",
  },
  screenLightMode: {
    width: "100%",
    flex: 1,
    paddingBottom: 120,
    backgroundColor: Colors.primaryColorLightMode,
    alignItems: "center",
  },
  searchBarContainerLargeDarkMode: {
    height: 80,
    borderRadius: 50,
    width: "78%",
    backgroundColor: Colors.textBoxColorDarkMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerLargeLightMode: {
    height: 80,
    borderRadius: 50,
    width: "78%",
    backgroundColor: Colors.textBoxColorLightMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerDarkMode: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: Colors.textBoxColorDarkMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerLightMode: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: Colors.textBoxColorLightMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  list: {
    width: "80%",
    alignSelf: "center",
  },
  separatorDarkMode: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.dividerColorDarkMode,
    alignSelf: "center",
  },
  separatorLightMode: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.dividerColorLightMode,
    alignSelf: "center",
  },
  largeTextInputDarkMode: {
    fontSize: 25,
    marginLeft: 20,
    color: Colors.accentColorDarkMode,
  },
  largeTextInputLightMode: {
    fontSize: 25,
    marginLeft: 20,
    color: Colors.accentColorLightMode,
  },
  textInputDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  textInputLightMode: {
    color: Colors.accentColorLightMode,
  },
  noticeLargeDarkMode: {
    textAlign: "center",
    fontSize: 40,
    color: Colors.accentColorDarkMode,
  },
  noticeLargeLightMode: {
    textAlign: "center",
    fontSize: 40,
    color: Colors.accentColorLightMode,
  },
  noticeDarkMode: {
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  noticeLightMode: {
    textAlign: "center",
    color: Colors.accentColorLightMode,
  },
  noticeContainerLarge: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 200,
  },
  noticeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 50,
  },
  addButtonContainerLarge: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    overflow: "hidden",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
  addButtonText: {},
});

export default MonstersScreen;
