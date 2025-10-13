"use client";

import React from "react";
import styles from "./counter.module.css";

type StatItem = {
  number: string;
  caption: string;
};

const stats: StatItem[] = [
  { number: "15+", caption: "Bespoke Projects Wrapped" },
  { number: "6+", caption: "Years Experience" },
  { number: "100%", caption: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statCaption}>{stat.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
