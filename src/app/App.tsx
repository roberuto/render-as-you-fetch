import React, { useState, useTransition, Suspense } from "react";

import { Settings } from "./components/Settings/Settings";
import { SuperheroProfile } from "./components/SuperheroProfile/SuperheroProfile";
import { useSettingsState } from "hooks";

import { fetchSuperheroesData, getNextId } from "api/superheroes/superheroes";

import styles from "./App.module.css";

export const App = () => {
  const {
    enableUseTransition,
    enablePendingDelay,
    transitionTime,
    superheroesDelay,
    superpowersDelay
  } = useSettingsState();

  const [resource, setResource] = useState(
    fetchSuperheroesData({
      superheroesDelay: superheroesDelay!,
      superpowersDelay: superpowersDelay!
    })(0)
  );
  const [startTransition, isPending] = useTransition({
    timeoutMs: transitionTime!
  });

  const getNextResources = () => {
    const nextUserId = getNextId(resource.heroId);
    setResource(
      fetchSuperheroesData({
        superheroesDelay: superheroesDelay!,
        superpowersDelay: superpowersDelay!
      })(nextUserId)
    );
  };

  return (
    <div className={styles.app}>
      <Settings />
      <div className={styles.next}>
        <button
          className={styles.button}
          onClick={() => {
            enableUseTransition
              ? startTransition(() => {
                  getNextResources();
                })
              : getNextResources();
          }}
        >
          Next
        </button>
        {isPending && (
          <span className={enablePendingDelay ? styles.pending : ""}>
            LOADING CHARACTER...
          </span>
        )}
      </div>
      <div className={styles.superhero}>
        <Suspense
          fallback={<h1 className={styles.fallback}>Loading profile...</h1>}
        >
          <SuperheroProfile resource={resource} />
        </Suspense>
      </div>
    </div>
  );
};
