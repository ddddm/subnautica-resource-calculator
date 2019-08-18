import React, { useContext, useState } from "react";

import ItemsContext from "../itemsContext";
import RecipeListItemName from "./RecipeListItemName";
import RecipeList from "./RecipeList";

export default function RecipteListItem({ material, direction }) {
  const { recipes, sources } = useContext(ItemsContext);
  const [isFolded, setFold] = useState(true);
  const { item, qty } = material;
  let materiaSubList;

  if (direction === "recipe") {
    materiaSubList = recipes.get(item);
  } else if (direction === "source") {
    materiaSubList = sources.get(item);
  }

  return (
    <li>
      {materiaSubList && (
        <button onClick={() => setFold(!isFolded)}>
          {isFolded ? "+" : "-"}
        </button>
      )}
      <RecipeListItemName token={item} />
      {qty && ` \u00D7 ${qty}`}

      {materiaSubList && !isFolded && (
        <RecipeList direction={direction} items={materiaSubList} />
      )}
    </li>
  );
}
