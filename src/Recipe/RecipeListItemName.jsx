import React, { useContext } from "react";

import ItemsContext from "../itemsContext";

export default function RecipteListItem({ token }) {
  const { materials } = useContext(ItemsContext);
  const materialName = materials.get(token);
  return <span>{materialName}</span>;
}
