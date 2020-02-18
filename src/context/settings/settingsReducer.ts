import * as types from "./settingsActionsTypes";

import { SettingsAction } from "./settingsReducer.types";
import { SettingsStateContextType } from "./settingsContext.types";

export const settingsReducer: (
  state: SettingsStateContextType,
  action: SettingsAction
) => SettingsStateContextType = (state, action) => {
  switch (action.type) {
    case types.ENABLE_USE_TRANSITION: {
      return { ...state, enableUseTransition: action.enableUseTransition };
    }
    case types.ENABLE_PENDING_DELAY: {
      return { ...state, enablePendingDelay: action.enablePendingDelay };
    }
    case types.TRANSTION_TIME: {
      return { ...state, transitionTime: action.transitionTime };
    }
    case types.SUPERHEROES_DELAY: {
      return { ...state, superheroesDelay: action.superheroesDelay };
    }
    case types.SUPERPOWERS_DELAY: {
      return { ...state, superpowersDelay: action.superpowersDelay };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
