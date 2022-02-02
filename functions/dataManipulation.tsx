import AsyncStorage from "@react-native-async-storage/async-storage";

class dataManipulation {
  saveData = async () => {
    try {
      const jsonValue = JSON.stringify(this.data);
      await AsyncStorage.setItem("LocalMonsterData", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  private loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("LocalMonsterData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      alert(e);
    }
  };

  resetData = async () => {
    this.data = require("../data/monster-data.json");
    this.saveData();
  };

  clearData = async () => {
    this.data = [];
    this.saveData();
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
