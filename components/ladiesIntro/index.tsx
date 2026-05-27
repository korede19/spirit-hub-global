import React from "react";
import styles from "./styles.module.css";

const stats = [
    { number: "50+", label: "Sessions Conducted" },
    { number: "2020", label: "Year Founded" },
    { number: "Weekly", label: "Thursday Meetings" },
    { number: "Global", label: "Reach" },
];

export default function LadiesIntro() {
    return (
        <section className={styles.section} id="about-ladies-arise">
            <div className={styles.container}>

                <div className={styles.grid}>
                    {/* Left */}
                    <div className={styles.left}>
                        <span className="sectionLabel">Our Story</span>
                        <h2 className={styles.heading}>
                            Empowering Women to Rise in <em>Every Sphere</em>
                        </h2>
                        <p className={styles.lead}>
                            The inception of Ladies Arise dates back to{" "}
                            <strong>September 14, 2020</strong>, with a mission to empower
                            and awaken the awareness of women in this era.
                        </p>
                        <p className={styles.body}>
                            Enabling them to grasp their identity, inner potential, and how
                            to achieve fullness in Christ Jesus. Numerous teachings have been
                            conducted to unveil God&apos;s intentions for his daughters.
                        </p>
                        <p className={styles.body}>
                            The initial focus was on the imperative of women rising to claim
                            their positions in every sphere of life. Subsequent gatherings
                            continued to champion this divine call.
                        </p>
                        <p className={styles.body}>
                            Over 50 sessions have been conducted, delving into the lives of
                            women who achieved remarkable feats for God in their respective
                            eras — women who nurtured kingdom influencers and those who stood
                            unwavering on the frontlines.
                        </p>
                    </div>

                    {/* Right */}
                    <div className={styles.right}>
                        <div className={styles.imageWrap}>
                            <img
                                src="/assets/ladies-arise.jpg"
                                alt="Ladies Arise community"
                                className={styles.image}
                                loading="lazy"
                            />
                            <div className={styles.imageOverlay} />
                        </div>

                        {/* Stats overlay card */}
                        <div className={styles.statsCard}>
                            {stats.map((s, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statNumber}>{s.number}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}