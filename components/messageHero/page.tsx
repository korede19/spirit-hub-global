import React from "react";
import styles from "./styles.module.css";
import { series } from "@/data/message";


export default function MessagesHero() {
    const totalMessages = series.reduce((acc, s) => acc + s.totalMessages, 0);

    return (
        <section className={styles.hero} aria-label="Messages">
            <div className={styles.overlay} />
            <div
                className={styles.bg}
                style={{
                    backgroundImage:
                        "url(/assets/image-4.jpeg)",
                }}
            />

            <div className={styles.bottomFade} aria-hidden="true" />
            <div className={styles.content}>
                <span className={styles.eyebrow}>Teaching Library</span>
                <h1 className={styles.title}>Messages</h1>
                <p className={styles.subtitle}>
                    Decades of revelation distilled into Spirit-filled series — crafted
                    to equip, enlighten, and empower you for Kingdom work.
                </p>

                {/* Quick stats */}
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>{series.length}</span>
                        <span className={styles.statLabel}>Series</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>{totalMessages}+</span>
                        <span className={styles.statLabel}>Messages</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>4</span>
                        <span className={styles.statLabel}>Categories</span>
                    </div>
                </div>
            </div>

            {/* Scroll chips */}
            <div className={styles.seriesChips}>
                {series.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className={styles.chip}>
                        {s.title}
                    </a>
                ))}
            </div>
        </section>
    );
}