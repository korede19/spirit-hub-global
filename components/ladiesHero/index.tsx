import React from "react";
import styles from "./styles.module.css";

export default function LadiesHero() {
    return (
        <section className={styles.hero} aria-label="Ladies Arise">
            <div className={styles.overlay} />
            <div
                className={styles.bg}
                style={{
                    backgroundImage:
                        "url(/assets/img-1.jpeg)",
                }}
            />

            {/* Floating decorative rings */}
            <div className={styles.ring1} aria-hidden="true" />
            <div className={styles.ring2} aria-hidden="true" />

            <div className={styles.bottomFade} aria-hidden="true" />
            <div className={styles.content}>
                <span className={styles.eyebrow}>SpiritHubGlobal Presents</span>
                <h1 className={styles.title}>
                    Ladies <em>Arise</em>
                </h1>
                <p className={styles.subtitle}>
                    Awakening women to their identity, potential &amp; fullness in Christ.
                </p>
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Every Thursday
                    </div>
                    <span className={styles.metaDot} />
                    <div className={styles.metaItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        8:00 PM — 9:00 PM
                    </div>
                    <span className={styles.metaDot} />
                    <div className={styles.metaItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Telegram
                    </div>
                </div>
                <a
                    href="https://t.me/ladiesarise12092020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                >
                    Join on Telegram
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            {/* Inception badge */}
            <div className={styles.badge}>
                <span className={styles.badgeTop}>Est.</span>
                <span className={styles.badgeDate}>Sept 2018</span>
                <span className={styles.badgeBottom}>50+ Sessions</span>
            </div>
        </section >
    );
}