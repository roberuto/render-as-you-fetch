import React from "react";

import styles from "./Superpowers.module.css";

import { SuperpowersProps } from "./Superpowers.types";

export const Superpowers: React.FC<SuperpowersProps> = ({ resource }) => {
  const superpowers = resource.superpowers.read();

  return (
    <div>
      {superpowers.map((power, idx) => (
        <p className={styles.superpower} key={idx}>
          {power}
        </p>
      ))}
    </div>
  );
};
