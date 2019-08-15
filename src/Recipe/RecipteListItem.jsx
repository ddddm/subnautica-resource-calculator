import React, { useContext } from "react";

import ItemsContext from "../itemsContext";
import Item from "./Item";
import RecipeList from "./RecipeList";

export default function RecipteListItem({ material, direction }) {
  const { recipes, sources } = useContext(ItemsContext);
  const { item, qty } = material;
  let materiaSubList;

  if (direction === "recipe") {
    materiaSubList = recipes.get(item);
  } else if (direction === "source") {
    materiaSubList = sources.get(item);
  }

  return (
    <li>
      <Item token={item} />
      {qty && ` \u00D7 ${qty}`}

      {materiaSubList && (
        <RecipeList direction={direction} items={materiaSubList} />
      )}
    </li>
  );
}
