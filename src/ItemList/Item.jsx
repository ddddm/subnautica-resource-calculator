import React, { useCallback } from "react";

import styles from "./Item.module.css";

const Icon = ({ color }) => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5"
        cy="5"
        r="5"
        style={{
          fill: color
        }}
      />
      />
    </svg>
  );
};

export default ({ onClick, data }) => {
  const { token, name, color } = data;
  const clickHandler = useCallback(() => onClick(token), [token, onClick]);
  return (
    <li role="button" className={styles.listItem} onClick={clickHandler}>
      <Icon color={color} />
      <span>{name}</span>
    </li>
  );
};
