import React from "react";
import styles from "./styles.module.css";

const patterns = [
    {
        id: "online",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        label: "Online Ministry",
        heading: "Reaching the World Digitally",
        body: "The online ministry aims to equip and connect with our global family through teachings, prayers, prophecy, healings, and miracles. We offer powerful and amazing content that will bless and empower individuals worldwide. All our social media platforms serve as mediums for our online ministry.",
    },
    {
        id: "onsite",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        label: "On-Site Ministry",
        heading: "Present, Personal & Powerful",
        body: "The on-site ministry encompasses physical meetings and outreaches where the Word of God is taught and spiritual manifestations are demonstrated through God's power. We are mandated apostolically to extend the love and power of God — to cities, villages, schools, orphanages, communities, and institutions.",
    },
    {
        id: "media",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                <polyline points="17 2 12 7 7 2" />
            </svg>
        ),
        label: "TV, Media & Affiliates",
        heading: "Broadcasting the Kingdom",
        body: "We are committed to showcasing the unique gifts and callings of the members of the body of Christ. We are developing TV programs, reality shows, and a variety of impactful content designed to uplift and edify everyone. Our mission is to support and nurture other ministries that minister to the body, soul, and spirit.",
    },
];

export default function VisionPattern() {
    return (
        <section className={styles.section} id="the-pattern">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className="sectionLabel">How We Operate</span>
                    <h2 className="sectionTitle">The Pattern</h2>
                    <p className="sectionSubtitle">
                        Three streams, one mandate — reaching every soul with the fullness
                        of the Kingdom.
                    </p>
                </div>

                {/* Pattern items */}
                <div className={styles.items}>
                    {patterns.map((p, i) => (
                        <article key={p.id} className={styles.item}>
                            <div className={styles.itemLeft}>
                                <div className={styles.indexLine}>
                                    <span className={styles.index}>0{i + 1}</span>
                                    <div className={styles.indexDash} />
                                </div>
                                <div className={styles.iconBox}>
                                    {p.icon}
                                </div>
                                <span className={styles.label}>{p.label}</span>
                            </div>
                            <div className={styles.itemRight}>
                                <h3 className={styles.itemHeading}>{p.heading}</h3>
                                <p className={styles.itemBody}>{p.body}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Closing statement */}
                <div className={styles.closing}>
                    <div className={styles.closingInner}>
                        <span className={styles.closingCross}>✦</span>
                        <p className={styles.closingText}>
                            In essence, our goal is to quicken people&apos;s understanding of God,
                            unravel the mysteries of the kingdom, walk in love and power, impact
                            nations, and birth new possibilities in God. We invite you all to
                            partake in what God is accomplishing through us, as He will use you
                            as an extension of His glory.
                        </p>
                        <p className={styles.closingVow}>
                            <em>
                                We vow to stay aligned with God&apos;s current emphasis and be led by
                                His Spirit. May the name of the Lord be exalted in every nation.
                            </em>
                        </p>
                        <span className={styles.amen}>Amen.</span>
                    </div>
                </div>

            </div>
        </section>
    );
}