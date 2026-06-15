import Link from "next/link";
import styles from "./styles.module.css";

export default function NotFoundSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <span className={styles.code} aria-hidden="true">404</span>

      <div className={styles.container}>
        <span className={styles.eyebrow}>Lost in the Spirit?</span>
        <h1 className={styles.title}>
          This Page Has <em>Wandered Off</em>
        </h1>
        <p className={styles.subtitle}>
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or never was. Let&apos;s get you back to where the Spirit is
          moving.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.cta}>
            Back to Home
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Contact Us
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <span className={styles.dot} />
          <Link href="/the-vision">The Vision</Link>
          <span className={styles.dot} />
          <Link href="/messages">Messages</Link>
          <span className={styles.dot} />
          <Link href="/donations">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}
