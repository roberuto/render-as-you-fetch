import React, { useReducer } from "react";

import {
  SettingsStateContext,
  SettingsDispatchContext
} from "./SettingsContext";

import { settingsReducer } from "./settingsReducer";

export const SettingsContextController: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, {
    enableUseTransition: false,
    enablePendingDelay: false,
    transitionTime: 1000,
    superheroesDelay: 2000,
    superpowersDelay: 2000
  });

  return (
    <SettingsStateContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsStateContext.Provider>
  );
};
