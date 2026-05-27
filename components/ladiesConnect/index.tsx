import React from "react";
import styles from "./styles.module.css";

export default function LadiesConnect() {
    return (
        <section className={styles.section} id="connect">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className="sectionLabel">Stay Connected</span>
                    <h2 className="sectionTitle">Join the Community</h2>
                    <p className="sectionSubtitle">
                        Connect with a global family of women pursuing God&apos;s fullness.
                        We meet every Thursday — and the conversation continues all week.
                    </p>
                </div>

                <div className={styles.cards}>

                    {/* Telegram card */}
                    <div className={`${styles.card} ${styles.cardPrimary}`}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.947l-2.94-.924c-.64-.203-.653-.64.135-.954l11.57-4.461c.537-.194 1.006.131.869.613z" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.cardPlatform}>Telegram Group</span>
                            <h3 className={styles.cardHeading}>Weekly Thursday Meetings</h3>
                            <p className={styles.cardText}>
                                Join us live every Thursday from 8pm to 9pm for teachings,
                                prayers, and fellowship that will bless and empower you,
                                wherever you are in the world.
                            </p>
                            <div className={styles.cardMeta}>
                                <span className={styles.cardMetaItem}>
                                    <span className={styles.liveDot} />
                                    Active Community
                                </span>
                                <span className={styles.cardMetaItem}>8 PM — 9 PM WAT</span>
                            </div>
                        </div>
                        <a
                            href="https://t.me/ladiesarise12092020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardBtn}
                        >
                            Join Our Telegram Group
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Instagram card */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.cardPlatform}>Instagram</span>
                            <h3 className={styles.cardHeading}>Edifying Daily Content</h3>
                            <p className={styles.cardText}>
                                Follow us on Instagram where we share edifying content that
                                serves the purpose of reawakening ladies to who they are in God
                                — every single day.
                            </p>
                            <div className={styles.cardMeta}>
                                <span className={styles.cardMetaItem}>@ladiesarise_</span>
                            </div>
                        </div>
                        <a
                            href="https://www.instagram.com/ladiesarise_?igsh=OGoxZmUzOTkyYnZm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.cardBtn} ${styles.cardBtnOutline}`}
                        >
                            Follow on Instagram
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Bottom quote */}
                <div className={styles.quote}>
                    <p>
                        &ldquo;Prepare to be equipped, enlightened, and empowered for
                        kingdom work. May the name of the Lord be exalted in every
                        nation.&rdquo;
                    </p>
                </div>

            </div>
        </section >
    );
}