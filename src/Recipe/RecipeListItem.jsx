import React, { useContext, useState } from "react";

import ItemsContext from "../itemsContext";
import RecipeListItemName from "./RecipeListItemName";
import RecipeList from "./RecipeList";
import ItemIcon from "../ItemIcon";

import styles from "./RecipeListItem.module.css";

export default function RecipteListItem({ material, direction }) {
  const { recipes, sources, materials } = useContext(ItemsContext);
  const [isFolded, setFold] = useState(true);
  const { item, qty } = material;
  const { color } = materials.get(item);
  let materiaSubList;

  if (direction === "recipe") {
    materiaSubList = recipes.get(item);
  } else if (direction === "source") {
    materiaSubList = sources.get(item);
  }

  return (
    <li className={styles.listItem}>
      {materiaSubList && (
        <button onClick={() => setFold(!isFolded)}>
          {isFolded ? "+" : "-"}
        </button>
      )}
      <ItemIcon color={color} />
      <RecipeListItemName token={item} />
      {qty && ` \u00D7 ${qty}`}

      {materiaSubList && !isFolded && (
        <RecipeList direction={direction} items={materiaSubList} />
      )}
    </li>
  );
}
