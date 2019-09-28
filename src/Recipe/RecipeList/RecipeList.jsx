import React from "react";

import RecipeListItem from "../RecipeListItem";

export default function RecipeList({ items, direction }) {
  if (!items) return null;

  return (
    <ul>
      {items.map(m => (
        <RecipeListItem key={m.item} direction={direction} material={m} />
      ))}
    </ul>
  );
}
