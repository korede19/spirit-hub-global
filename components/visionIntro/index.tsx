import React from "react";
import styles from "./styles.module.css";

export default function VisionIntro() {
    return (
        <section className={styles.section} id="vision-intro">
            <div className={styles.container}>

                <div className={styles.labelRow}>
                    <span className="sectionLabel">Spirit Hub Global</span>
                </div>

                <div className={styles.grid}>
                    <div className={styles.left}>
                        <h2 className={styles.heading}>
                            The Central &amp; Most Vital <em>Part of God&apos;s System</em>
                        </h2>
                        <div className={styles.accentBar} />
                    </div>

                    <div className={styles.right}>
                        <p className={styles.lead}>
                            Spirit Hub Global Ministries is a non-denominational ministry with
                            an Apostolic and Prophetic mandate to guide people into the core of
                            God&apos;s life and ways.
                        </p>
                        <p className={styles.body}>
                            This is the womb where God&apos;s wisdom, agenda, and operations are
                            manifested in the light of Jesus. It serves as God&apos;s strategic
                            platform to prepare saints for ministry, aiming to impart an
                            understanding of God&apos;s will.
                        </p>
                        <p className={styles.body}>
                            We will always be at the focal point of God&apos;s system, activities,
                            and emphasis for every season and generation. We are the family of
                            God prepared to raise men that will find their unique expressions
                            by the Spirit.
                        </p>
                        <p className={styles.body}>
                            Our agenda is to cultivate a community prioritizing the
                            kingdom&apos;s values and giving life to God&apos;s thoughts.
                        </p>
                    </div>
                </div>

                {/* Name meaning card */}
                <div className={styles.nameCard}>
                    <div className={styles.nameCardInner}>
                        <span className={styles.nameCardLabel}>The Name</span>
                        <p className={styles.nameCardText}>
                            <strong>SPIRIT HUB GLOBAL</strong> signifies the central or most
                            vital part of an area, system, or activity to which all other
                            parts are connected. We are mandated to reach nations,
                            encompassing every tribe and tongue.
                        </p>
                    </div>
                    <div className={styles.nameCardAccent} aria-hidden="true">✦</div>
                </div>

            </div>
        </section>
    );
}