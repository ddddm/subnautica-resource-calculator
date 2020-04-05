import React, { useCallback } from "react";

import ItemIcon from "../ItemIcon";
import styles from "./Item.module.css";

export default ({ onClick, data }) => {
  const { token, name, color } = data;
  const clickHandler = useCallback(() => onClick(token), [token, onClick]);
  return (
    <li role="button" className={styles.listItem} onClick={clickHandler}>
      <ItemIcon color={color} />
      <span>{name}</span>
    </li>
  );
};
