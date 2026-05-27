import React from "react";
import styles from "./styles.module.css";

const teachings = [
    "When Ladies Arise",
    "Overpowering Deception",
    "The Powerful Woman",
    "The Complete Woman",
    "The Construct",
    "The Blessing",
    "The Advantage",
    "The Woman The Lord Brought",
    "The Audacity Of Deborah",
    "A Woman Of Depth",
    "The Spirit and Prophecy",
    "Relax",
    "Functioning In Prophetic Capacity",
];

export default function LadiesTeachings() {
    return (
        <section className={styles.section} id="teachings">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className="sectionLabel">Topics Covered</span>
                    <h2 className="sectionTitle">Some of Our Teachings</h2>
                    <p className="sectionSubtitle">
                        Each session is designed to unveil God&apos;s intentions for His
                        daughters and equip them to rise in every area of life.
                    </p>
                </div>

                <div className={styles.body}>
                    {/* Teaching cards */}
                    <div className={styles.grid}>
                        {teachings.map((title, i) => (
                            <div key={i} className={styles.card}>
                                <span className={styles.cardIndex}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className={styles.cardTitle}>{title}</span>
                                <span className={styles.cardArrow} aria-hidden="true">→</span>
                            </div>
                        ))}
                    </div>

                    {/* Side info panel */}
                    <div className={styles.panel}>
                        <div className={styles.panelInner}>
                            <div className={styles.panelIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <h3 className={styles.panelHeading}>
                                Rooted in <em>Scripture</em>
                            </h3>
                            <p className={styles.panelText}>
                                Every teaching is carefully drawn from the Word of God,
                                designed to transform mindsets and unlock the God-given
                                potential in every woman.
                            </p>
                            <div className={styles.panelStat}>
                                <span className={styles.panelStatNumber}>50+</span>
                                <span className={styles.panelStatLabel}>
                                    Life-changing sessions delivered since 2020
                                </span>
                            </div>
                            <a
                                href="https://t.me/ladiesarise12092020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.panelCta}
                            >
                                Access Teachings on Telegram
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}