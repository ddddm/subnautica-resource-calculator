import React, { useState } from "react";

import Search from "./ItemList/Search";
import RecipeDetails from "./Recipe/RecipeDetails";

import "./globalStyles.css";
import styles from "./App.module.css";

export default function App() {
  const [selectedItem, selectItem] = useState();

  return (
    <>
      <Search className={styles.search} onItemSelect={selectItem} />
      <RecipeDetails className={styles.details} selectedToken={selectedItem} />
    </>
  );
}
