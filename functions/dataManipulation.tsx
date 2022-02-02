import AsyncStorage from "@react-native-async-storage/async-storage";

class dataManipulation {
  saveData = async () => {
    try {
      const jsonValue = JSON.stringify(this.data);
      await AsyncStorage.setItem("TestMonsterDataLocation", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  private loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("TestMonsterDataLocation");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      alert(e);
    }
  };

  resetData = async () => {
    try {
      const value = require("../data/monster-data.json");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("TestMonsterDataLocation", jsonValue);
      this.storeLoadedData();
    } catch (e) {
      alert(e);
    }
  };

  clearData = async () => {
    try {
      const value: any[] = [];
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("TestMonsterDataLocation", jsonValue);
      this.storeLoadedData();
    } catch (e) {
      alert(e);
    }
  };

  storeLoadedData = async () => {
    this.data = await this.loadData();
  };

  getData = () => {
    return this.data;
  };
  setData = (newData: any[]) => {
    this.data = newData;
  };

  data: any[] = [];
}

export default dataManipulation;
