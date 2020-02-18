import { useContext } from "react";

import { SettingsDispatchContext } from "context/settings/SettingsContext";
import { SettingsDispatchContextType } from "context/settings/settingsContext.types";

export const useSettingsDispatch: () => SettingsDispatchContextType = () => {
  const context = useContext(SettingsDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useSettingsDispatch must be used within an SettingsContextController"
    );
  }

  return context;
};
