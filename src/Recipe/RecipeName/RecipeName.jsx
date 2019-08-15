import React from "react";

import styles from "./RecipeName.module.css";

function RecipeNameIcon() {
  return <div className={styles.icon} />;
}
export default function RecipeName({ name = "Item" }) {
  return (
    <>
      <RecipeNameIcon />
      <h1>{name}</h1>
    </>
  );
}
