"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "../themeToggle/index";
import styles from "./styles.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Vision", href: "/the-vision" },
  { label: "Ladies Arise", href: "/ladies-arise" },
  { label: "Messages", href: "/messages" },
  { label: "Partner With Us", href: "/donations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            aria-label="SpiritHubGlobal Home"
          >
            <span className={styles.logoMark}>✦</span>
            <span className={styles.logoText}>
              SpiritHub<em>Global</em>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className={styles.actions}>
            <ThemeToggle />
            <Link
              href="https://spirithubglobal.org/prayer-request/"
              className={styles.ctaBtn}
              target="_blank"
            >
              Prayer Request
            </Link>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayVisible : ""
          }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        ref={menuRef}
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileHeader}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>
            SpiritHub<em>Global</em>
          </span>
        </div>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://spirithubglobal.org/prayer-request/"
            className={styles.mobileCta}
            onClick={handleNavClick}
            target="_blank"
          >
            Submit Prayer Request
          </Link>
        </div>
      </nav>
    </>
  );
}
