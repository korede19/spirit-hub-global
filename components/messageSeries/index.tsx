"use client";

import React, { useState } from "react";
import { series, tagColors, Series } from "@/data/message";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";

function SeriesCard({ s }: { s: Series }) {
    const [openSeason, setOpenSeason] = useState<number | null>(0);
    const [showAll, setShowAll] = useState(false);
    const tagColor = tagColors[s.tag] ?? "var(--color-brand)";
    const PREVIEW = 8;

    return (
        <article className={styles.card} id={s.id}>
            {/* Card header */}
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderLeft}>
                    <span className={styles.tag} style={{ background: `${tagColor}18`, color: tagColor, borderColor: `${tagColor}40` }}>
                        {s.tag}
                    </span>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                    {s.subtitle && <p className={styles.cardSubtitle}>{s.subtitle}</p>}
                    {s.dateRange && (
                        <p className={styles.dateRange}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {s.dateRange}
                        </p>
                    )}
                    <Link href={s.link} className={styles.watchButton}>
                        Watch Series <IoPlayCircleOutline size={20} />
                    </Link>
                </div>
                <div className={styles.cardHeaderRight}>
                    <div className={styles.countBadge}>
                        <span className={styles.countNum}>{s.totalMessages}</span>
                        <span className={styles.countLabel}>Messages</span>
                    </div>
                </div>
            </div>

            {/* Seasons (Power Series) */}
            {s.seasons && (
                <div className={styles.seasons}>
                    {s.seasons.map((season, si) => (
                        <div key={si} className={styles.season}>
                            <button
                                className={`${styles.seasonToggle} ${openSeason === si ? styles.seasonOpen : ""}`}
                                onClick={() => setOpenSeason(openSeason === si ? null : si)}
                                aria-expanded={openSeason === si}
                            >
                                <span className={styles.seasonLabel}>{season.label}</span>
                                <span className={styles.seasonCount}>{season.messages.length} messages</span>
                                <svg
                                    className={styles.chevron}
                                    width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            {openSeason === si && (
                                <div className={styles.messageList}>
                                    {season.messages.map((msg) => (
                                        <div key={msg.id} className={styles.messageRow}>
                                            <span className={styles.msgIndex}>{String(msg.id).padStart(2, "0")}</span>
                                            <span className={styles.msgTitle}>{msg.title}</span>
                                            {msg.day && <span className={styles.msgDay}>{msg.day}</span>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Flat message list */}
            {s.messages && (
                <div className={styles.messageList}>
                    {(showAll ? s.messages : s.messages.slice(0, PREVIEW)).map((msg) => (
                        <div key={msg.id} className={styles.messageRow}>
                            <span className={styles.msgIndex}>{String(msg.id).padStart(2, "0")}</span>
                            <span className={styles.msgTitle}>{msg.title}</span>
                        </div>
                    ))}
                    {s.messages.length > PREVIEW && (
                        <button
                            className={styles.showMoreBtn}
                            onClick={() => setShowAll((v) => !v)}
                        >
                            {showAll
                                ? "Show Less"
                                : `Show All ${s.messages.length} Messages`}
                            <svg
                                width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2.5"
                                style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </article>
    );
}

export default function MessagesSeries() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="sectionLabel">All Series</span>
                    <h2 className="sectionTitle">Teaching Library</h2>
                    <p className="sectionSubtitle">
                        Browse all series below. Every message is a step deeper into the
                        things of the Spirit.
                    </p>
                </div>

                <div className={styles.seriesList}>
                    {series.map((s) => (
                        <SeriesCard key={s.id} s={s} />
                    ))}
                </div>
            </div>
            <Link href="https://www.youtube.com/@spirithubglobal" target="_blank" className={styles.exploreMore}>
                <IoPlayCircleOutline size={25} />
                Explore More Messages
            </Link>
        </section>
    );
}