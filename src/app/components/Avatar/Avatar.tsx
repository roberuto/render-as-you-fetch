import React from "react";

import styles from "./Avatar.module.css";

import { AvatarProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarProps> = ({ image }) => (
  <div className={styles.avatar}>
    <img src={image} alt="avatar" />
  </div>
);
