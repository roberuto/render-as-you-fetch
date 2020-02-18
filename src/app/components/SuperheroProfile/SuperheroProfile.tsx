import React, { Suspense } from "react";

import { Superpowers } from "../Superpowers/Superpowers";
import { Avatar } from "../Avatar/Avatar";

import styles from "./SuperheroProfile.module.css";

import { SuperheroProfileProps } from "./SuperheroProfile.types";

export const SuperheroProfile: React.FC<SuperheroProfileProps> = ({
  resource
}) => {
  const superhero = resource.superhero.read();

  return (
    <div className={styles.superheroProfile}>
      <Avatar image={superhero.image} />
      <div className={styles.superheroInfo}>
        <h1>{superhero.name}</h1>
        <div className={styles.line}></div>
        <Suspense
          fallback={<p style={{ fontSize: 24 }}>Loading superpowers...</p>}
        >
          <Superpowers resource={resource} />
        </Suspense>
      </div>
    </div>
  );
};
