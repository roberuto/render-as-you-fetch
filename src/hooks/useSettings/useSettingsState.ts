import { useContext } from "react";

import { SettingsStateContext } from "context/settings/SettingsContext";
import { SettingsStateContextType } from "context/settings/settingsContext.types";

export const useSettingsState: () => SettingsStateContextType = () => {
  const context = useContext(SettingsStateContext);

  if (context === undefined) {
    throw new Error(
      "useSettingsState must be used within an SettingsContextController"
    );
  }

  return context;
};
