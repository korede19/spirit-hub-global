import React from "react";
import styles from "./styles.module.css";

export default function DonateHero() {
    return (
        <section className={styles.hero} aria-label="Donate">
            <div className={styles.overlay} />
            <div
                className={styles.bg}
                style={{
                    backgroundImage:
                        "url(/assets/donateBg.jpg)",
                }}
            />

            {/* Floating rings */}
            <div className={styles.ring1} aria-hidden="true" />
            <div className={styles.ring2} aria-hidden="true" />

            <div className={styles.content}>
                <span className={styles.eyebrow}>Partner With Us</span>
                <h1 className={styles.title}>
                    For Donation <br />& <em>Seed</em>
                </h1>
                <p className={styles.subtitle}>
                    Your giving is not just a transaction — it is a seed sown into
                    God&apos;s kingdom. Every donation empowers us to reach more nations,
                    equip more believers, and demonstrate God&apos;s power across the
                    earth.
                </p>

                <div className={styles.verse}>
                    <span className={styles.quoteIcon}>&ldquo;</span>
                    <p>
                        Give, and it will be given to you. A good measure, pressed down,
                        shaken together and running over...
                    </p>
                    <cite>Luke 6:38</cite>
                </div>
            </div>

            <div className={styles.bottomFade} aria-hidden="true" />
        </section>
    );
}