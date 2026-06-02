"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const slides = [
  {
    id: 1,
    image: "/assets/image-4.jpeg",
    alt: "Worship gathering at SpiritHubGlobal",
  },
  {
    id: 2,
    image: "/assets/image-2.jpeg",
    alt: "Community prayer at SpiritHubGlobal",
  },
  {
    id: 3,
    image: "/assets/image-3.jpeg",
    alt: "Bible study at SpiritHubGlobal",
  },
  {
    id: 4,
    image: "/assets/img-1.jpeg",
    alt: "Revival service at SpiritHubGlobal",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background Slider */}
      <div className={styles.sliderTrack}>
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${i === current ? styles.active : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* Layered Overlays for depth */}
      <div className={styles.overlayGradient} />
      <div className={styles.overlayVignette} />
      <div className={styles.overlayPattern} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Welcome to SpiritHubGlobal</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.headlineTop}>Where the Spirit</span>
            <span className={styles.headlineMid}>
              Moves &amp; <em>Lives</em>
            </span>
            <span className={styles.headlineBottom}>Are Transformed.</span>
          </h1>

          {/* Subtext */}
          <p className={styles.subtext}>
            We are the family of God prepared to raise men that will find their
            unique expressions by the spirit. Our agenda is to cultivate a
            community prioritizing the kingdom’s values and giving life to God’s
            thoughts.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <Link href="/the-vision" className={styles.ctaPrimary}>
              The Vision
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
            </Link>
            <Link
              href="https://spirithubglobal.org/new-converts-registration/"
              className={styles.ctaSecondary}
              target="_blank"
            >
              New to Faith?
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className={styles.scrollIndicator} aria-hidden="true">
            <div className={styles.scrollLine} />
            <span>Scroll</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100k+</span>
            <span className={styles.statLabel}>Global Members</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Nations Reached</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>800+</span>
            <span className={styles.statLabel}>Meetings Held</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Lives Changed</span>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className={styles.controls}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar} key={current}>
        <div className={styles.progressFill} />
      </div>
    </section>
  );
}
