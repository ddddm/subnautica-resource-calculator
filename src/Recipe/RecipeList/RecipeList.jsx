import React from "react";

import RecipeListItem from "../RecipeListItem";
import classes from "./RecipeList.module.css";

export default function RecipeList({ items, direction }) {
  if (!items) return null;

  return (
    <ul className={classes.container}>
      {items.map(m => (
        <RecipeListItem key={m.item} direction={direction} material={m} />
      ))}
    </ul>
  );
}
