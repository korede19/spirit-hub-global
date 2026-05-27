import styles from "./styles.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section
      className={styles.about}
      id="about"
      aria-label="About SpiritHubGlobal"
    >
      <div className={styles.container}>
        {/* Left — Image Stack */}
        <div className={styles.imageStack}>
          <div className={styles.imagePrimary}>
            <Image
              src="/assets/vison.jpeg"
              alt="SpiritHubGlobal community gathering"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>

          {/* Decorative badge */}
          <div className={styles.badge}>
            <span className={styles.badgeYear}>Est.</span>
            <span className={styles.badgeNum}>2018</span>
            <span className={styles.badgeLabel}>Years of Impact</span>
          </div>
          {/* Accent shape */}
          <div className={styles.accentDot} aria-hidden="true" />
        </div>

        {/* Right — Text */}
        <div className={styles.textCol}>
          <span className="sectionLabel">The Vison</span>

          <h2 className={styles.title}>
            A Global Family <br />
            Anchored in <em>The Spirit</em>
          </h2>

          <p className={styles.lead}>
            Spirit Hub Global Ministries is a non-denominational ministry with
            an Apostolic and Prophetic mandate to guide people into the core of
            God’s life and ways. This is the womb where God’s wisdom, agenda,
            and operations are manifested in the light of Jesus.
          </p>

          <p className={styles.body}>
            It serves as God’s strategic platform to prepare saints for
            ministry, aiming to impart an understanding of God’s will. We will
            always be at the focal point of God’s system, activities, and
            emphasis for every season and generation. We are the family of God
            prepared to raise men that will find their unique expressions by the
            spirit. Our agenda is to cultivate a community prioritizing the
            kingdom’s values and giving life to God’s thoughts.
            <br />
            <br />
            The name SPIRIT HUB GLOBAL signifies the central or most vital part
            of an area, system, or activity to which all other parts are
            connected. We are mandated to reach nations, encompassing every
            tribe and tongue.
          </p>

          <a
            href="/the-vision"
            className={styles.learnMore}
          >
            Learn More About Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
