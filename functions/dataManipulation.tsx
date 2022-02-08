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
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      } else {
        this.initializeSaveData();
        return this.loadData;
      }
    } catch (e) {
      alert(e);
    }
  };

  initializeSaveData = () => {
    this.setData([]);
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
