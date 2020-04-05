import React from "react";

import styles from "./RecipeName.module.css";

export default function RecipeName({ name = "Item" }) {
  return <h1 className={styles.header}>{name}</h1>;
}
