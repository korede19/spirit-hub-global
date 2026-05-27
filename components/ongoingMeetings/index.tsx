"use client";

import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from "react";
import styles from "./styles.module.css";

// ── Types ────────────────────────────────────────────────

type Accent = "gold" | "blue" | "teal";

interface Timezone {
  flag: string;
  label: string;
  time: string;
}

interface Meeting {
  id: number | string;
  title: string;
  accent: Accent;
  type?: string;
  days?: string;
  dateRange?: string;
  timezones?: Timezone[];
}

interface FormState {
  name: string;
  email: string;
  country: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

// ── Data ─────────────────────────────────────────────────

const MEETINGS: Meeting[] = [
  {
    id: 1,
    title: "Supernatural Service",
    days: "Sundays",
    type: "Worship Service",
    accent: "gold",
    timezones: [
      { flag: "🇳🇬", label: "Nigeria", time: "05:00 AM" },
      { flag: "🇺🇸", label: "USA (EST)", time: "12:00 AM" },
      { flag: "🇬🇧", label: "UK (BST)", time: "05:00 AM" },
      { flag: "🇿🇦", label: "South Africa", time: "06:00 AM" },
      { flag: "🇰🇪", label: "Kenya", time: "07:00 AM" },
      { flag: "🇺🇸", label: "USA (CST)", time: "11:00 PM (Sat)" },
      { flag: "🇺🇸", label: "USA (PST)", time: "09:00 PM (Sat)" },
    ],
  },
  {
    id: 2,
    title: "Intercessory Meeting",
    days: "Thursdays",
    type: "Intercession",
    accent: "blue",
    timezones: [
      { flag: "🇳🇬", label: "Nigeria", time: "11:00 PM" },
      { flag: "🇺🇸", label: "USA (EST)", time: "06:00 PM" },
      { flag: "🇬🇧", label: "UK (GMT)", time: "11:00 PM" },
      { flag: "🇿🇦", label: "South Africa", time: "12:00 AM (Fri)" },
      { flag: "🇰🇪", label: "Kenya", time: "01:00 AM (Fri)" },
      { flag: "🇬🇺", label: "Guam", time: "08:00 AM (Fri)" },
    ],
  },
  {
    id: 3,
    title: "Kingdom Discipleship Masterclass",
    days: "Fridays & Saturdays",
    type: "Masterclass",
    accent: "teal",
    timezones: [
      { flag: "🇳🇬", label: "Nigeria", time: "06:00 PM" },
      { flag: "🇺🇸", label: "USA (EST)", time: "01:00 PM" },
      { flag: "🇬🇧", label: "UK (GMT)", time: "06:00 PM" },
      { flag: "🇿🇦", label: "South Africa", time: "07:00 PM" },
      { flag: "🇰🇪", label: "Kenya", time: "08:00 PM" },
      { flag: "🇺🇸", label: "USA (CST)", time: "12:00 PM" },
      { flag: "🇺🇸", label: "USA (PST)", time: "10:00 AM" },
    ],
  },
];

const SPECIAL_EVENT: Meeting = {
  id: "special",
  title: "70 Days of Prophecy, Dreams and Visions",
  dateRange: "June 1 – August 09",
  accent: "gold",
};

const EMPTY_FORM: FormState = { name: "", email: "", country: "" };

// ── Component ─────────────────────────────────────────────

export default function OngoingMeetings() {
  const [activeMeeting, setActiveMeeting] = useState<Meeting | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = activeMeeting ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeMeeting]);

  /* Close on Escape */
  const closeModal = useCallback(() => {
    setActiveMeeting(null);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  const openModal = (meeting: Meeting) => {
    setActiveMeeting(meeting);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.country.trim()) e.country = "Country is required.";
    return e;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    /* TODO: wire up real submission (e.g. fetch/API call) */
    setSubmitted(true);
  };

  const accent: Accent = activeMeeting?.accent ?? "gold";

  return (
    <section className={styles.section} id="meetings" aria-label="Ongoing Meetings">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div>
            <span className="sectionLabel">Live &amp; Recurring</span>
            <h2 className="sectionTitle">Ongoing Meetings</h2>
            <p className="sectionSubtitle">
              Join us live or online. These recurring gatherings are open to all
              — wherever you are in the world.
            </p>
          </div>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} aria-hidden="true" />
            Meetings Active
          </div>
        </div>

        {/* ── Cards ── */}
        <div className={styles.grid}>
          {MEETINGS.map((meeting, index) => (
            <article
              key={meeting.id}
              className={`${styles.card} ${styles[`card--${meeting.accent}`]}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.cardAccentBar} />
              <div className={styles.cardInner}>

                <div className={styles.cardMeta}>
                  <span className={styles.typeBadge}>{meeting.type}</span>
                  <span className={styles.dayPill}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {meeting.days}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{meeting.title}</h3>
                <div className={styles.divider} />

                <div className={styles.tzSection}>
                  <div className={styles.tzHeader}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    World Times
                  </div>
                  <ul className={styles.tzList} aria-label="Time zones">
                    {meeting.timezones?.map((tz, i) => (
                      <li key={i} className={styles.tzRow}>
                        <span className={styles.tzFlag} aria-hidden="true">{tz.flag}</span>
                        <span className={styles.tzLabel}>{tz.label}</span>
                        <span className={styles.tzTime}>{tz.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={styles.joinBtn}
                  onClick={() => openModal(meeting)}
                  aria-haspopup="dialog"
                >
                  Register to Join
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

              </div>
            </article>
          ))}
        </div>

        {/* ── Up Next Banner ── */}
        <div className={styles.upNext}>
          <div className={styles.upNextGlow} aria-hidden="true" />
          <div className={styles.upNextLeft}>
            <span className={styles.upNextBadge}>
              <span className={styles.upNextDot} aria-hidden="true" />
              Up Next
            </span>
            <p className={styles.upNextDate}>{SPECIAL_EVENT.dateRange}</p>
            <h3 className={styles.upNextTitle}>{SPECIAL_EVENT.title}</h3>
          </div>
          <button
            className={styles.upNextBtn}
            onClick={() => openModal(SPECIAL_EVENT)}
            aria-haspopup="dialog"
          >
            Register Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* ── Registration Modal ── */}
      {activeMeeting && (
        <div
          className={styles.backdrop}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Register for ${activeMeeting.title}`}
        >
          <div
            className={`${styles.modal} ${styles[`modal--${accent}`]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalAccentBar} />

            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close registration"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              /* ── Success ── */
              <div className={styles.successState}>
                <div className={`${styles.successIcon} ${styles[`successIcon--${accent}`]}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>You&apos;re Registered!</h3>
                <p className={styles.successMsg}>
                  Welcome, <strong>{form.name}</strong>. We&apos;ll send details to{" "}
                  <strong>{form.email}</strong> for <em>{activeMeeting.title}</em>.
                </p>
                <button
                  className={`${styles.submitBtn} ${styles[`submitBtn--${accent}`]}`}
                  onClick={closeModal}
                >
                  Done
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <div className={styles.modalHeader}>
                  <span className={`${styles.modalTypeBadge} ${styles[`modalTypeBadge--${accent}`]}`}>
                    {activeMeeting.type ?? "Special Event"}
                  </span>
                  <h3 className={styles.modalTitle}>{activeMeeting.title}</h3>
                  {activeMeeting.dateRange && (
                    <p className={styles.modalDate}>{activeMeeting.dateRange}</p>
                  )}
                  {activeMeeting.days && (
                    <p className={styles.modalDate}>Every {activeMeeting.days}</p>
                  )}
                </div>

                <form className={styles.form} onSubmit={handleSubmit} noValidate>

                  {/* Name */}
                  <div className={`${styles.fieldGroup} ${errors.name ? styles.fieldError : ""}`}>
                    <label className={styles.label} htmlFor="reg-name">Full Name</label>
                    <div className={styles.inputWrap}>
                      <svg className={styles.inputIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        id="reg-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className={styles.input}
                        value={form.name}
                        onChange={handleChange}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                    </div>
                    {errors.name && (
                      <span id="err-name" className={styles.errorMsg} role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={`${styles.fieldGroup} ${errors.email ? styles.fieldError : ""}`}>
                    <label className={styles.label} htmlFor="reg-email">Email Address</label>
                    <div className={styles.inputWrap}>
                      <svg className={styles.inputIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        id="reg-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        className={styles.input}
                        value={form.email}
                        onChange={handleChange}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <span id="err-email" className={styles.errorMsg} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Country */}
                  <div className={`${styles.fieldGroup} ${errors.country ? styles.fieldError : ""}`}>
                    <label className={styles.label} htmlFor="reg-country">Country</label>
                    <div className={styles.inputWrap}>
                      <svg className={styles.inputIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <input
                        id="reg-country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        placeholder="Enter your country"
                        className={styles.input}
                        value={form.country}
                        onChange={handleChange}
                        aria-describedby={errors.country ? "err-country" : undefined}
                      />
                    </div>
                    {errors.country && (
                      <span id="err-country" className={styles.errorMsg} role="alert">
                        {errors.country}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${styles[`submitBtn--${accent}`]}`}
                  >
                    Complete Registration
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}