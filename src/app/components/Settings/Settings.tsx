import React from "react";

import { useSettingsState, useSettingsDispatch } from "hooks";
import * as actions from "context/settings/settingsActionCreators";

import styles from "./Settings.module.css";

export const Settings: React.FC = () => {
  const {
    enableUseTransition,
    enablePendingDelay,
    transitionTime,
    superheroesDelay,
    superpowersDelay
  } = useSettingsState();
  const dispatch = useSettingsDispatch();

  return (
    <div className={styles.settings}>
      <div>
        <label>useTransitions</label>
        <input
          type="checkbox"
          checked={enableUseTransition}
          onChange={event =>
            dispatch(actions.setEnableUseTransition(event.target.checked))
          }
        />
      </div>
      <div>
        <label>Delay pending indicator</label>
        <input
          type="checkbox"
          checked={enablePendingDelay}
          onChange={event =>
            dispatch(actions.setEnablePendingDelay(event.target.checked))
          }
        />
      </div>
      <div>
        <label>Transition time</label>
        <input
          value={transitionTime}
          type="number"
          onChange={event =>
            dispatch(actions.setTransitionTime(Number(event.target.value)))
          }
        />
      </div>
      <div>
        <label>Superheroes delay</label>
        <input
          value={superheroesDelay}
          type="number"
          onChange={event =>
            dispatch(actions.setSuperheroesDelay(Number(event.target.value)))
          }
        />
      </div>
      <div>
        <label>Superpowers delay</label>
        <input
          value={superpowersDelay}
          type="number"
          onChange={event =>
            dispatch(actions.setSuperpowersDelay(Number(event.target.value)))
          }
        />
      </div>
    </div>
  );
};
