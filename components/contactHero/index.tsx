import React from "react";
import styles from "./styles.module.css";

export default function ContactHero() {
    return (
        <section className={styles.hero} aria-label="Contact Us">
            <div className={styles.overlay} />
            <div
                className={styles.bg}
                style={{
                    backgroundImage:
                        "url(/assets/bg.jpeg)",
                }}
            />

            <div className={styles.content}>
                <span className={styles.eyebrow}>We&apos;d Love to Hear From You</span>
                <h1 className={styles.title}>Get In Touch</h1>
                <p className={styles.subtitle}>
                    Whether you have a prayer request, a testimony to share, or simply
                    want to connect — we are here for you. You are never alone.
                </p>
            </div>

            {/* Bottom fade into page */}
            <div className={styles.bottomFade} aria-hidden="true" />
        </section>
    );
}