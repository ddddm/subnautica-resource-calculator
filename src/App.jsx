import React, { useState } from "react";

import Search from "./ItemList/Search";
import RecipeDetails from "./Recipe/RecipeDetails";
import Placeholder from "./Placeholder/Placeholder";

import "./globalStyles.css";
import styles from "./App.module.css";

export default function App() {
  const [selectedItem, selectItem] = useState(null);

  return (
    <>
      <Search className={styles.search} onItemSelect={selectItem} />
      {selectedItem ? (
        <RecipeDetails
          className={styles.details}
          selectedToken={selectedItem}
        />
      ) : (
        <Placeholder className={styles.placeholder} />
      )}
    </>
  );
}
