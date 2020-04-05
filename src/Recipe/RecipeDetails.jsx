import React, { useContext } from "react";

import ItemsContext from "../itemsContext";
import RecipeList from "./RecipeList";
import RecipeName from "./RecipeName/RecipeName";
import styles from "./RecipeDetails.module.css";
import { cn } from "../utils";

const RecipeSubHeader = ({ children }) => <p>{children}</p>;

export default function RecipeDetails({ selectedToken, className }) {
  const { recipes, materials, sources } = useContext(ItemsContext);

  if (!selectedToken) return null;

  const name = materials.get(selectedToken);
  const materialList = recipes.get(selectedToken);
  const sourcesList = sources.get(selectedToken);

  return (
    <section className={cn(styles.container, className)}>
      <RecipeName name={name} />
      {materialList && <RecipeSubHeader>Made from</RecipeSubHeader>}
      {materialList && <RecipeList direction="recipe" items={materialList} />}
      {sourcesList && <RecipeSubHeader>Used in</RecipeSubHeader>}
      {sourcesList && <RecipeList direction="source" items={sourcesList} />}
    </section>
  );
}
