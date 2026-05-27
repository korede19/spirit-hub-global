"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const quickLinks = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        label: "Prayer Request",
        description: "Let us stand with you in prayer. Submit your request and our intercessors will pray with you.",
        cta: "Submit Prayer Request",
        href: "https://spirithubglobal.org/prayer-request/",
        accent: true,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        label: "New Converts",
        description: "Just given your life to Christ? Register and let us walk with you through your new journey.",
        cta: "Register as New Convert",
        href: "https://spirithubglobal.org/new-converts-registration/",
        accent: false,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        label: "Share Testimony",
        description: "Your story of God's faithfulness can spark faith in others. Share what He has done for you.",
        cta: "Share Your Testimony",
        href: "https://spirithubglobal.org/testimony-form/",
        accent: false,
    },
];

const socials = [
    {
        label: "YouTube",
        handle: "SpiritHubGlobal",
        href: "#",
        color: "#FF0000",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        handle: "SpiritHubGlobal",
        href: "#",
        color: "#1877F2",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        handle: "@spirithubglobal",
        href: "#",
        color: "#E1306C",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Telegram",
        handle: "SpiritHubGlobal",
        href: "#",
        color: "#0088CC",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.947l-2.94-.924c-.64-.203-.653-.64.135-.954l11.57-4.461c.537-.194 1.006.131.869.613z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        handle: "@spirithubglobal",
        href: "#",
        color: "#000000",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactBody() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate submission — wire up to your API / Formspree / EmailJS here
        await new Promise((res) => setTimeout(res, 1800));
        setStatus("sent");
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* ── Quick links row ── */}
                <div className={styles.quickLinks}>
                    {quickLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.quickCard} ${link.accent ? styles.quickCardAccent : ""}`}
                        >
                            <div className={styles.quickIcon}>{link.icon}</div>
                            <div className={styles.quickBody}>
                                <span className={styles.quickLabel}>{link.label}</span>
                                <p className={styles.quickDesc}>{link.description}</p>
                            </div>
                            <span className={styles.quickCta}>
                                {link.cta}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>

                {/* ── Main grid: Form + Sidebar ── */}
                <div className={styles.grid}>

                    {/* Contact form */}
                    <div className={styles.formWrap}>
                        <div className={styles.formHeader}>
                            <span className="sectionLabel">Send a Message</span>
                            <h2 className={styles.formTitle}>We&apos;re Listening</h2>
                            <p className={styles.formSubtitle}>
                                Fill out the form below and our team will get back to you as
                                soon as possible.
                            </p>
                        </div>

                        {status === "sent" ? (
                            <div className={styles.successBox}>
                                <div className={styles.successIcon}>✦</div>
                                <h3 className={styles.successTitle}>Message Received!</h3>
                                <p className={styles.successText}>
                                    Thank you for reaching out. We&apos;ll get back to you
                                    shortly. God bless you!
                                </p>
                                <button
                                    className={styles.resetBtn}
                                    onClick={() => {
                                        setStatus("idle");
                                        setForm({ name: "", email: "", subject: "", message: "" });
                                    }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="name" className={styles.label}>
                                            Full Name <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className={styles.input}
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email Address <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={styles.input}
                                            placeholder="you@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="subject" className={styles.label}>
                                        Subject <span className={styles.required}>*</span>
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className={styles.select}
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select a subject</option>
                                        <option value="general">General Enquiry</option>
                                        <option value="prayer">Prayer Request</option>
                                        <option value="testimony">Testimony</option>
                                        <option value="partnership">Partnership / Support</option>
                                        <option value="media">Media & Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message" className={styles.label}>
                                        Message <span className={styles.required}>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Write your message here..."
                                        rows={6}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? (
                                        <>
                                            <span className={styles.spinner} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>

                        {/* Info card */}
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>Ministry Information</h3>
                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={styles.infoLabel}>Meeting Schedule</p>
                                        <p className={styles.infoValue}>Thursdays · 8:00 PM — 9:00 PM WAT</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={styles.infoLabel}>Primary Platform</p>
                                        <p className={styles.infoValue}>Telegram & Online Meetings</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={styles.infoLabel}>Reach</p>
                                        <p className={styles.infoValue}>Global · 50+ Nations</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={styles.infoLabel}>Email</p>
                                        <p className={styles.infoValue}>info@spirithubglobal.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Socials card */}
                    <div className={styles.socialsCard}>
                        <h3 className={styles.infoTitle}>Follow Us</h3>
                        <div className={styles.socialsList}>
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialRow}
                                >
                                    <span
                                        className={styles.socialIcon}
                                        style={{ background: `${s.color}18`, color: s.color }}
                                    >
                                        {s.icon}
                                    </span>
                                    <span className={styles.socialInfo}>
                                        <span className={styles.socialLabel}>{s.label}</span>
                                        <span className={styles.socialHandle}>{s.handle}</span>
                                    </span>
                                    <svg
                                        className={styles.socialArrow}
                                        width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2.5"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>


                </div >

            </div >
        </section >
    );
}