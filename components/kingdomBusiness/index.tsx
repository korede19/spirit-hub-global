"use client";

import { useState } from "react";
import Modal, { type ModalType } from "@/components/prayerSection/Modal";
import styles from "./styles.module.css";

const checklist = [
  "Your Name",
  "Name of Your Business",
  "Location",
  "Contact Details",
  "Email Address",
  "About Your Business",
];

export default function KingdomBusiness() {
  const [activeModal, setActiveModal] = useState<ModalType | null>("business");

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Kingdom Businessmen</span>
          <h1 className={styles.title}>
            Register Your <em>Business</em>
          </h1>
          <p className={styles.subtitle}>
            Are you a Spirit-filled believer running a business? Join our
            growing network of Kingdom-minded entrepreneurs — register today
            and let the community know what you do.
          </p>
          <button
            className={styles.cta}
            onClick={() => setActiveModal("business")}
          >
            Register Your Business
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.checklist}>
          <p className={styles.checklistLabel}>What you&apos;ll need</p>
          <ul className={styles.checklistItems}>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
