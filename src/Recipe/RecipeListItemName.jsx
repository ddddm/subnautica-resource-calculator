import React, { useContext } from "react";

import ItemsContext from "../itemsContext";

export default function RecipteListItem({ token }) {
  const { materials } = useContext(ItemsContext);
  const { name } = materials.get(token);
  return <span>{name}</span>;
}
