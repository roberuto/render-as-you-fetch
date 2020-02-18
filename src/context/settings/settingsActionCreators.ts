import * as types from "./settingsActionsTypes";
import { SettingsAction } from "./settingsReducer.types";

export const setEnableUseTransition: (
  enableUseTransition: boolean
) => SettingsAction = enableUseTransition => ({
  type: types.ENABLE_USE_TRANSITION,
  enableUseTransition
});

export const setEnablePendingDelay: (
  enablePendingDelay: boolean
) => SettingsAction = enablePendingDelay => ({
  type: types.ENABLE_PENDING_DELAY,
  enablePendingDelay
});

export const setTransitionTime: (
  transitionTime: number
) => SettingsAction = transitionTime => ({
  type: types.TRANSTION_TIME,
  transitionTime
});

export const setSuperheroesDelay: (
  superheroesDelay: number
) => SettingsAction = superheroesDelay => ({
  type: types.SUPERHEROES_DELAY,
  superheroesDelay
});

export const setSuperpowersDelay: (
  superpowersDelay: number
) => SettingsAction = superpowersDelay => ({
  type: types.SUPERPOWERS_DELAY,
  superpowersDelay
});
