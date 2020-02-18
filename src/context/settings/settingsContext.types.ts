import { Dispatch } from "react";
import { SettingsAction } from "./settingsReducer.types";

export type SettingsStateContextType = {
  enableUseTransition?: boolean;
  enablePendingDelay?: boolean;
  transitionTime?: number;
  superheroesDelay?: number;
  superpowersDelay?: number;
};

export type SettingsDispatchContextType = Dispatch<SettingsAction>;
