import React from "react";

import RecipteListItem from "./RecipteListItem";

export default function RecipeList({ items, direction }) {
  if (!items) return null;

  return (
    <ul>
      {items.map(m => (
        <RecipteListItem key={m.item} direction={direction} material={m} />
      ))}
    </ul>
  );
}
