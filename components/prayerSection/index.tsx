import Link from "next/link";
import styles from "./styles.module.css";
import { items } from "@/utils/data";

export default function Prayer() {
  return (
    <section
      className={styles.section}
      id="prayer"
      aria-label="Connect with us"
    >
      {/* Background decoration */}
      <div className={styles.bgDecor} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sectionLabel">Connect With Us</span>
          <h2 className="sectionTitle">
            We&apos;re More Than a Ministry —<br />
            <em>We&apos;re Family.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${
                item.accent ? styles.cardAccent : ""
              }`}
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <span className={styles.eyebrow}>{item.eyebrow}</span>
              <h3 className={styles.cardHeading}>{item.heading}</h3>
              <p className={styles.cardBody}>{item.body}</p>
              <Link
                href={item.href}
                className={styles.cardCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
