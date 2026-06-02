"use client"
import React from "react";
import styles from "./styles.module.css";

const methods = [
    {
        id: "paypal",
        label: "PayPal",
        color: "#003087",
        bgColor: "#003087",
        textColor: "#fff",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z" />
            </svg>
        ),
        details: [
            { label: "PayPal Username", value: "@THESEUNOMOLADE" },
            { label: "PayPal Email", value: "OLUWASEUNOMOLADE15@GMAIL.COM" },
        ],
        copyable: ["@THESEUNOMOLADE", "OLUWASEUNOMOLADE15@GMAIL.COM"],
    },
    {
        id: "cashapp",
        label: "Cash App",
        color: "#00D632",
        bgColor: "#00D632",
        textColor: "#fff",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.067 0H3.933C1.76 0 0 1.76 0 3.933v16.134C0 22.24 1.76 24 3.933 24h16.134C22.24 24 24 22.24 24 20.067V3.933C24 1.76 22.24 0 20.067 0zm-3.98 13.088l-.8.8a.463.463 0 0 1-.656 0l-2.233-2.232-2.232 2.232a.463.463 0 0 1-.656 0l-.8-.8a.463.463 0 0 1 0-.656l2.232-2.232-2.232-2.233a.463.463 0 0 1 0-.655l.8-.8a.463.463 0 0 1 .656 0l2.232 2.232 2.233-2.232a.463.463 0 0 1 .655 0l.8.8a.463.463 0 0 1 0 .655l-2.232 2.233 2.232 2.232a.463.463 0 0 1 0 .656z" />
            </svg>
        ),
        details: [
            { label: "Cash App", value: "$ADEPAULAD" },
        ],
        copyable: ["$ADEPAULAD"],
    },
    {
        id: "zelle",
        label: "Zelle",
        color: "#6D1ED4",
        bgColor: "#6D1ED4",
        textColor: "#fff",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.5h-8l5-6H8V9h8l-5 6h6.5v1.5z" />
            </svg>
        ),
        details: [
            { label: "Zelle Name", value: "ELIZABETH FOFANA" },
            { label: "Zelle Number", value: "@4438259421" },
        ],
        copyable: ["4438259421"],
    },
    {
        id: "nigeria",
        label: "Nigerian Account",
        color: "#008751",
        bgColor: "#008751",
        textColor: "#fff",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <line x1="6" y1="15" x2="10" y2="15" />
            </svg>
        ),
        details: [
            { label: "Bank", value: "First Bank of Nigeria" },
            { label: "Account Name", value: "Spirit Hub Global Ministries" },
            { label: "Account Number", value: "2046970347" },
        ],
        copyable: ["2046970347"],
    },
    {
        id: "kenya",
        label: "Kenya — M-Pesa",
        color: "#4CAF50",
        bgColor: "#4CAF50",
        textColor: "#fff",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth="3" />
                <line x1="9" y1="6" x2="15" y2="6" />
            </svg>
        ),
        details: [
            { label: "Platform", value: "M-Pesa" },
            { label: "Name", value: "Omolade Richard" },
            { label: "Number", value: "703629269" },
        ],
        copyable: ["703629269"],
    },
];

export default function DonateBody() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <span className="sectionLabel">Giving Methods</span>
                    <h2 className="sectionTitle">Choose How to Give</h2>
                    <p className="sectionSubtitle">
                        We accept donations through multiple platforms worldwide. Every seed
                        you sow goes directly towards advancing the Kingdom of God.
                    </p>
                </div>

                {/* Methods grid */}
                <div className={styles.grid}>
                    {methods.map((method) => (
                        <DonationCard key={method.id} method={method} />
                    ))}
                </div>

                {/* Bottom encouragement */}
                <div className={styles.encouragement}>
                    <div className={styles.encourageInner}>
                        <div className={styles.encourageIcon} aria-hidden="true">🙏</div>
                        <div className={styles.encourageText}>
                            <h3 className={styles.encourageTitle}>
                                Thank You for Your Generosity
                            </h3>
                            <p className={styles.encourageBody}>
                                Every gift — no matter the size — is a seed planted in
                                Kingdom soil. We believe God will multiply your seed sown and
                                increase the fruits of your righteousness. Your partnership
                                enables us to reach nations, equip believers, and demonstrate
                                God&apos;s power across the earth.
                            </p>
                            <p className={styles.encourageVerse}>
                                <em>
                                    &ldquo;Now He who supplies seed to the sower and bread for
                                    food will also supply and increase your store of seed and
                                    will enlarge the harvest of your righteousness.&rdquo;
                                </em>
                                <span>— 2 Corinthians 9:10</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ── Donation Card ── */
function DonationCard({ method }: { method: (typeof methods)[0] }) {
    return (
        <article className={styles.card}>
            {/* Top color bar */}
            <div
                className={styles.cardBar}
                style={{ background: method.color }}
                aria-hidden="true"
            />

            {/* Card header */}
            <div className={styles.cardHead}>
                <div
                    className={styles.cardIconWrap}
                    style={{
                        background: `${method.color}18`,
                        color: method.color,
                        border: `1px solid ${method.color}30`,
                    }}
                >
                    {method.icon}
                </div>
                <h3 className={styles.cardLabel}>{method.label}</h3>
            </div>

            {/* Details */}
            <div className={styles.detailsList}>
                {method.details.map((d) => (
                    <div key={d.label} className={styles.detailRow}>
                        <span className={styles.detailLabel}>{d.label}</span>
                        <span className={styles.detailValue}>{d.value}</span>
                    </div>
                ))}
            </div>

            {/* Copy buttons */}
            <div className={styles.copyRow}>
                {method.copyable.map((val) => (
                    <CopyButton key={val} value={val} color={method.color} />
                ))}
            </div>
        </article>
    );
}

function CopyButton({ value, color }: { value: string; color: string }) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
        }
    };

    return (
        <button
            className={styles.copyBtn}
            onClick={handleCopy}
            style={
                copied
                    ? { background: color, color: "#fff", borderColor: color }
                    : {}
            }
            aria-label={`Copy ${value}`}
        >
            {copied ? (
                <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                </>
            ) : (
                <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy {value}
                </>
            )}
        </button>
    );
}