import React from "react";

import styles from "./Search.module.css";

export default function Search({ className, onSearch, term, onBlur, onFocus }) {
  return (
    <div className={className}>
      <input
        className={styles.input}
        onChange={onSearch}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
