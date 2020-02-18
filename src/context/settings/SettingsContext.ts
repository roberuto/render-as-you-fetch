import { createContext } from "react";

import {
  SettingsStateContextType,
  SettingsDispatchContextType
} from "./settingsContext.types";

export const SettingsStateContext = createContext<
  SettingsStateContextType | undefined
>(undefined);

export const SettingsDispatchContext = createContext<
  SettingsDispatchContextType | undefined
>(undefined);
