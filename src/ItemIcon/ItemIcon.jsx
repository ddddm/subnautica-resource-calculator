import React from "react";

import styles from "./ItemIcon.module.css";

export default ({ color }) => {
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
