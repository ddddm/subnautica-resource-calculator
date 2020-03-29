import React from "react";

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
  const { token, name, color, imageUrl } = data;
  const clickHandler = e => {
    const { target } = e;
    const token = target.dataset.token;
    onClick(token);
  };
  return (
    <li
      role="button"
      className={styles.listItem}
      onClick={clickHandler}
      data-token={token}
    >
      <Icon color={color} />
      <span>{name}</span>
    </li>
  );
};
