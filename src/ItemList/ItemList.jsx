import React from "react";

import { cn } from "../utils";
import Item from "./Item";
import styles from "./ItemList.module.css";

const ItemList = ({ list, className, onItemSelect }) => {
  return (
    <ul className={cn(className, styles.list)}>
      {list.map(item => (
        <Item key={item.token} data={item} onClick={onItemSelect} />
      ))}
    </ul>
  );
};
export default ItemList;