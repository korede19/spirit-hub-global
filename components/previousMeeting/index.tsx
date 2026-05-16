"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { previousMeetings } from "@/utils/data";

export default function PreviousMeetings() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      className={styles.section}
      id="previous-meetings"
      aria-label="Previous Meetings"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sectionLabel">Archive</span>
          <h2 className="sectionTitle">Previous Meetings</h2>
          <p className="sectionSubtitle">
            Missed a session? Every meeting is recorded and available for you to
            revisit at any time.
          </p>
        </div>

        <div className={styles.grid}>
          {previousMeetings.map((meeting, index) => (
            <article
              key={meeting.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Video thumbnail / player */}
              <div className={styles.mediaWrap}>
                {activeVideo === meeting.id && meeting.youtubeId ? (
                  <iframe
                    className={styles.videoFrame}
                    src={`https://www.youtube.com/embed/${meeting.youtubeId}?autoplay=1`}
                    title={meeting.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {meeting.thumbnail && (
                      <Image
                        src={meeting.thumbnail}
                        alt={`${meeting.title} — replay thumbnail`}
                        className={styles.thumb}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className={styles.playOverlay}>
                      <button
                        className={styles.playBtn}
                        onClick={() => setActiveVideo(meeting.id)}
                        aria-label={`Watch replay of ${meeting.title}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="24"
                          height="24"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </button>
                      <span className={styles.watchLabel}>Watch Replay</span>
                    </div>
                  </>
                )}
              </div>

              {/* Card info */}
              <div className={styles.info}>
                <div className={styles.datePill}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {meeting.date}
                </div>

                <h3 className={styles.cardTitle}>{meeting.title}</h3>
                <p className={styles.speaker}>{meeting.speaker}</p>
                <p className={styles.topic}>{meeting.topic}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className={styles.viewAll}>
          <a
            href="https://www.youtube.com/@spirithubglobal/playlists"
            className={styles.viewAllLink}
            target="_blank"
          >
            View All Past Meetings
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
