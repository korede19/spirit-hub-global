import React from "react";
import styles from "./styles.module.css";

export default function VisionHero() {
    return (
        <section className={styles.hero} aria-label="The Vision">
            <div className={styles.overlay} />
            <div className={styles.bg}
                style={{
                    backgroundImage:
                        "url(/assets/image-2.jpeg)",
                }}
            />
            <div className={styles.content}>
                <span className={styles.eyebrow}>Our Mandate</span>
                <h1 className={styles.title}>The Vision</h1>
                <p className={styles.subtitle}>Spirit Hub Global Ministries</p>
                <div className={styles.scrollHint} aria-hidden="true">
                    <div className={styles.scrollLine} />
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}