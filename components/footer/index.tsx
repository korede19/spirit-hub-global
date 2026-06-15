"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Modal, { type ModalType } from "@/components/prayerSection/Modal";
import { openWhatsApp } from "@/utils/constants";

const currentYear = new Date().getFullYear();

const footerLinks = {
  Ministry: [
    { label: "The Vision", href: "/the-vision" },
    { label: "Ladies Arise", href: "/ladies-arise" },
    { label: "Partner With Us", href: "/donations" },
  ],
  Resources: [
    { label: "Books & Downloads", href: "/#books" },
    { label: "Past Meetings", href: "/#previous-meetings" },
    { label: "Devotionals", href: "/#books" },
  ],
  Connect: [
    { label: "Prayer Request", href: "#", modal: "prayer" as ModalType },
    { label: "New Converts", href: "#", modal: "salvation" as ModalType },
    { label: "Share Testimony", href: "#", modal: "testimony" as ModalType },
    { label: "Kingdom Businessmen", href: "#", modal: "business" as ModalType },
    { label: "Contact Us", href: "/contact", modal: null },
  ],
};

const socials = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("newsletter") as HTMLInputElement)?.value?.trim();
    if (!email) return;
    openWhatsApp(`[NEWSLETTER SUBSCRIPTION]\nEmail: ${email}`);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <footer className={styles.footer} id="footer" aria-label="Site footer">
        {/* Top wave / divider */}
        <div className={styles.waveDivider} aria-hidden="true">
          <div className={styles.waveInner} />
        </div>

        {/* Newsletter / CTA banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaHeading}>
                Stay Connected to the Move of God
              </h3>
              <p className={styles.ctaSubtext}>
                Get meeting updates, new resources, and devotionals delivered to
                your inbox.
              </p>
            </div>
            <form
              className={styles.emailForm}
              onSubmit={handleNewsletter}
            >
              <input
                type="email"
                name="newsletter"
                placeholder="Your email address"
                className={styles.emailInput}
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit" className={styles.emailBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main footer body */}
        <div className={styles.body}>
          <div className={styles.container}>
            {/* Brand col */}
            <div className={styles.brandCol}>
              <div className={styles.logoWrap}>
                <span className={styles.logoMark}>✦</span>
                <span className={styles.logoText}>
                  SpiritHub<em>Global</em>
                </span>
              </div>
              <p className={styles.brandDesc}>
                A global community of Spirit-filled believers pursuing God&apos;s
                presence, power, and purpose. Together, we worship, pray, and
                change the world.
              </p>
              {/* Socials */}
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={styles.socialIcon}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className={styles.linkCol}>
                <h4 className={styles.linkGroupTitle}>{group}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      {"modal" in link && link.modal ? (
                        <button
                          className={styles.footerLink}
                          onClick={() => setActiveModal((link as { modal: ModalType }).modal)}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link href={link.href} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {currentYear} SpiritHubGlobal. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>
                Privacy Policy
              </a>
              <span className={styles.bottomDot}>·</span>
              <a href="#" className={styles.bottomLink}>
                Terms of Use
              </a>
            </div>
            <p className={styles.madeWith}>
              Made with <span style={{ color: "var(--color-brand)" }}>♥</span> for
              the Kingdom
            </p>
          </div>
        </div>
      </footer>

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
