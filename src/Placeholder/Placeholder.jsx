import React from "react";

import styles from "./Placeholder.module.css";
import { cn } from "../utils";

export default function Placeholder({ className }) {
  return (
    <section className={cn(className, styles.container)}>
      <span>☝️ Start searching</span>
    </section>
  );
}
