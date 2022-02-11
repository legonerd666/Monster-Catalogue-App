import SettingsManipulation from "../../functions/SettingsManipulation";
import { TOGGLE_MODE } from "../actions/mode";

const getMode = () => {
  loadMode();
  return settings.getSettings().mode;
};

const loadMode = async () => {
  return await settings.storeLoadedSettings();
};

const settings = new SettingsManipulation();

const modeReducer = (state = { mode: getMode() }, action: any) => {
  switch (action.type) {
    case TOGGLE_MODE:
      if (state.mode === "light") {
        settings.setSettings({ mode: "dark" });
        settings.saveSettings();
        return { ...state, mode: "dark" };
      } else if (state.mode === "dark") {
        settings.setSettings({ mode: "light" });
        settings.saveSettings();
        return { ...state, mode: "light" };
      } else if (state.mode === "") {
        settings.setSettings({ mode: "dark" });
        settings.saveSettings();
        return { ...state, mode: "dark" };
      }

    default:
      return state;
  }
};

export default modeReducer;
