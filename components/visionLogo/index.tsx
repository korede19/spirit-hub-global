import React from "react";
import styles from "./styles.module.css";

const symbols = [
    {
        icon: "🦅",
        title: "The Eagle",
        subtitle: "Mount up and Have Dominion",
        description:
            "God uses this platform to raise individuals who will exert dominion across all spheres of life, uplifting the kingdom's banner.",
    },
    {
        icon: "👑",
        title: "The Crown",
        subtitle: "The Authority of a King",
        description:
            "Walking in the kingly authority of Christ, exercising dominion with righteousness and the power of the Holy Spirit.",
    },
    {
        icon: "🌍",
        title: "The Globe",
        subtitle: "The Vision is for Many Nations",
        description:
            "Our mandate extends beyond borders — reaching every tribe, tongue, and nation with the gospel of the Kingdom.",
    },
    {
        icon: "🤲",
        title: "The Hand",
        subtitle: "The Hand of God",
        description:
            "This ministry is carried by the Hand of God — not by human intelligence or strength. For by strength shall no man prevail, but by His Spirit.",
    },
];

export default function VisionLogo() {
    return (
        <section className={styles.section} id="prophetic-logo">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className="sectionLabel">Prophetic Interpretation</span>
                    <h2 className="sectionTitle">The Story Behind Our Logo</h2>
                    <p className={`sectionSubtitle ${styles.subtitle}`}>
                        On the 6th of July 2019, God communicated to our leader,{" "}
                        <strong>Pastor Omolade Richard</strong>, about this ministry. He
                        envisioned an eagle adorned with a golden crown atop a mountain —
                        symbolising God&apos;s purpose for this platform.
                    </p>
                </div>

                {/* Vision quote */}
                <blockquote className={styles.quote}>
                    <span className={styles.quoteMark}>&ldquo;</span>
                    <p>
                        He envisioned an eagle adorned with a golden crown atop a mountain.
                        This symbolizes God&apos;s use of this platform to raise individuals
                        who will exert dominion across all spheres of life, uplifting the
                        kingdom&apos;s banner.
                    </p>
                    <cite>— Pastor Omolade Richard, July 6, 2019</cite>
                </blockquote>

                {/* Symbol cards */}
                <div className={styles.grid}>
                    {symbols.map((s, i) => (
                        <article key={s.title} className={styles.card}>
                            <div className={styles.cardNumber}>0{i + 1}</div>
                            <div className={styles.iconWrap}>
                                <span className={styles.icon}>{s.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardSubtitle}>{s.subtitle}</p>
                            <p className={styles.cardDesc}>{s.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}