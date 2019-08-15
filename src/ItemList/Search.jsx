import React from "react";

import styles from "./Search.module.css";

export default function Search({ className, onSearch, term, list }) {
  return (
    <div className={className}>
      <input className={styles.input} onChange={onSearch} />
    </div>
  );
}
