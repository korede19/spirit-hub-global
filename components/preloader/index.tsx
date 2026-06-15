"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Preloader() {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const minTime = new Promise<void>((resolve) => setTimeout(resolve, 700));
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true })
          );

    Promise.all([minTime, pageReady]).then(() => {
      setFadingOut(true);
      setTimeout(() => setHidden(true), 600);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`${styles.preloader} ${fadingOut ? styles.fadeOut : ""}`}
      aria-hidden="true"
    >
      <div className={styles.content}>
        <span className={styles.mark}>✦</span>
        <span className={styles.text}>
          SpiritHub<em>Global</em>
        </span>
        <div className={styles.bar}>
          <div className={styles.barFill} />
        </div>
      </div>
    </div>
  );
}
