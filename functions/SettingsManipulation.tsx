import AsyncStorage from "@react-native-async-storage/async-storage";

class SettingsManipulation {
  saveSettings = async () => {
    try {
      const jsonValue = JSON.stringify(this.settings);
      await AsyncStorage.setItem("Settings", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  private loadSettings = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Settings");
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      } else {
        this.initializeSavedSettings();
        return this.loadSettings;
      }
    } catch (e) {
      alert(e);
    }
  };

  initializeSavedSettings = () => {
    this.setSettings({ mode: "dark" });
    this.saveSettings();
  };

  clearSettings = async () => {
    this.settings = { mode: "dark" };
    this.saveSettings();
  };

  storeLoadedSettings = async () => {
    this.settings = await this.loadSettings();
  };

  getSettings = () => {
    return this.settings;
  };
  setSettings = (newSettings: { mode: string }) => {
    this.settings = newSettings;
  };

  settings = { mode: "dark" };
}

export default SettingsManipulation;
