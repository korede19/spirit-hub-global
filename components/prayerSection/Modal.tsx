"use client";

import { useActionState, useEffect } from "react";
import {
  submitPrayerRequest,
  submitNewConvert,
  submitTestimony,
  submitKingdomBusiness,
} from "@/app/actions";
import { openWhatsApp } from "@/utils/constants";
import styles from "./styles.module.css";

export type ModalType = "prayer" | "salvation" | "testimony" | "business";

const config: Record<ModalType, { title: string; subtitle: string; icon: React.ReactNode }> = {
  prayer: {
    title: "Submit Your Prayer Request",
    subtitle: "Tell us what's on your heart — we'll stand with you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  salvation: {
    title: "Register as a New Convert",
    subtitle: "Welcome home. Let us walk this journey with you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  testimony: {
    title: "Share Your Testimony",
    subtitle: "Your story has power — it sparks faith in others.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  business: {
    title: "Kingdom Businessmen Registration",
    subtitle: "Connect your business with the Kingdom community.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
};

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

function SuccessView({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className={styles.successMsg}>
      <div className={styles.successIcon}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className={styles.successText}>Received!</p>
      <p className={styles.successSubtext}>{message}</p>
      <button className={styles.successCloseBtn} onClick={onClose}>
        Done
      </button>
    </div>
  );
}

function FormField({
  label, name, type = "text", required = true, placeholder, autoFocus,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={styles.input}
        autoFocus={autoFocus}
      />
    </div>
  );
}

function PrayerForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(submitPrayerRequest, null);

  useEffect(() => {
    if (state?.success && state.waText) openWhatsApp(state.waText);
  }, [state?.success]);

  if (state?.success) return <SuccessView message={state.message} onClose={onClose} />;

  return (
    <form action={action}>
      <FormField label="Your Name" name="name" placeholder="Enter your full name" autoFocus />
      <FormField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="+234 800 000 0000" />
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="request">Prayer Request</label>
        <textarea
          id="request"
          name="request"
          required
          placeholder="Share what you would like us to pray with you about..."
          className={styles.textarea}
        />
      </div>
      {state?.message && !state.success && (
        <p className={styles.errorMsg}>{state.message}</p>
      )}
      <button type="submit" disabled={pending} className={styles.submitBtn}>
        {pending && <span className={styles.spinner} />}
        {pending ? "Submitting…" : "Submit Prayer Request"}
      </button>
    </form>
  );
}

function SalvationForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(submitNewConvert, null);

  useEffect(() => {
    if (state?.success && state.waText) openWhatsApp(state.waText);
  }, [state?.success]);

  if (state?.success) return <SuccessView message={state.message} onClose={onClose} />;

  return (
    <form action={action}>
      <FormField label="Your Name" name="name" placeholder="Enter your full name" autoFocus />
      <FormField label="Email Address" name="email" type="email" placeholder="you@example.com" />
      <FormField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="+234 800 000 0000" />
      {state?.message && !state.success && (
        <p className={styles.errorMsg}>{state.message}</p>
      )}
      <button type="submit" disabled={pending} className={styles.submitBtn}>
        {pending && <span className={styles.spinner} />}
        {pending ? "Submitting…" : "Register Now"}
      </button>
    </form>
  );
}

function TestimonyForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(submitTestimony, null);

  useEffect(() => {
    if (state?.success && state.waText) openWhatsApp(state.waText);
  }, [state?.success]);

  if (state?.success) return <SuccessView message={state.message} onClose={onClose} />;

  return (
    <form action={action}>
      <FormField label="Your Name" name="name" placeholder="Enter your full name" autoFocus />
      <FormField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="+234 800 000 0000" />
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="testimony">Your Testimony</label>
        <textarea
          id="testimony"
          name="testimony"
          required
          placeholder="Tell us what God has done for you..."
          className={styles.textarea}
        />
      </div>
      {state?.message && !state.success && (
        <p className={styles.errorMsg}>{state.message}</p>
      )}
      <button type="submit" disabled={pending} className={styles.submitBtn}>
        {pending && <span className={styles.spinner} />}
        {pending ? "Submitting…" : "Share My Testimony"}
      </button>
    </form>
  );
}

function BusinessForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(submitKingdomBusiness, null);

  useEffect(() => {
    if (state?.success && state.waText) openWhatsApp(state.waText);
  }, [state?.success]);

  if (state?.success) return <SuccessView message={state.message} onClose={onClose} />;

  return (
    <form action={action}>
      <FormField label="Your Name" name="name" placeholder="Enter your full name" autoFocus />
      <FormField label="Name of Business" name="business" placeholder="e.g. Kingdom Crafts Ltd" />
      <FormField label="Location" name="location" placeholder="City, Country" />
      <FormField label="Contact Details" name="contact" type="tel" placeholder="Phone / WhatsApp number" />
      <FormField label="Email Address" name="email" type="email" placeholder="you@example.com" />
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="about">About Business</label>
        <textarea
          id="about"
          name="about"
          required
          placeholder="Briefly tell us about your business and what you offer..."
          className={styles.textarea}
        />
      </div>
      {state?.message && !state.success && (
        <p className={styles.errorMsg}>{state.message}</p>
      )}
      <button type="submit" disabled={pending} className={styles.submitBtn}>
        {pending && <span className={styles.spinner} />}
        {pending ? "Submitting…" : "Register Business"}
      </button>
    </form>
  );
}

export default function Modal({ type, onClose }: ModalProps) {
  const { title, subtitle, icon } = config[type];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className={styles.modalAccentBar} />

        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderInner}>
            <div className={styles.modalIconWrap}>{icon}</div>
            <h2 className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalSubtitle}>{subtitle}</p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {type === "prayer" && <PrayerForm onClose={onClose} />}
        {type === "salvation" && <SalvationForm onClose={onClose} />}
        {type === "testimony" && <TestimonyForm onClose={onClose} />}
        {type === "business" && <BusinessForm onClose={onClose} />}
      </div>
    </div>
  );
}
