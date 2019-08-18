import React, { useContext } from "react";

import ItemsContext from "../itemsContext";
import RecipeList from "./RecipeList";
import RecipeName from "./RecipeName/RecipeName";
import styles from "./RecipeDetails.module.css";

const RecipeSubHeader = ({ children }) => <h3>{children}</h3>;

export default function RecipeDetails({ selectedToken }) {
  const { recipes, materials, sources } = useContext(ItemsContext);

  if (!selectedToken) return null;

  const name = materials.get(selectedToken);
  const materialList = recipes.get(selectedToken);
  const sourcesList = sources.get(selectedToken);

  return (
    <section className={styles.container}>
      <RecipeName name={name} />
      {materialList && <RecipeSubHeader>Made from</RecipeSubHeader>}
      {materialList && <RecipeList direction="recipe" items={materialList} />}
      {sourcesList && <RecipeSubHeader>Used in</RecipeSubHeader>}
      {sourcesList && <RecipeList direction="source" items={sourcesList} />}
    </section>
  );
}
