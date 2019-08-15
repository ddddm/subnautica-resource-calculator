import React from "react";

import styles from "./Item.module.css";

export default ({ onClick, data }) => {
  const { token, name } = data;
  const clickHandler = e => {
    const { target } = e;
    const token = target.dataset.token;
    onClick(token);
  };
  return (
    <li
      role="button"
      className={styles.listItem}
      children={name}
      onClick={clickHandler}
      data-token={token}
    />
  );
};
