import styles from "./styles.module.css";
import { ongoingMeetings } from "@/utils/data";

export default function OngoingMeetings() {
  return (
    <section
      className={styles.section}
      id="meetings"
      aria-label="Ongoing Meetings"
    >
      <div className={styles.container}>
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

        <div className={styles.grid}>
          {ongoingMeetings.map((meeting, index) => (
            <article
              key={meeting.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card top accent */}
              <div className={styles.cardAccent} />

              {/* Card thumbnail */}
              <div className={styles.thumbnail}>
                <img
                  src={`https://placehold.co/600x300/0d0d0d/2596be?text=${encodeURIComponent(
                    meeting.title
                  )}`}
                  alt={meeting.title}
                  loading="lazy"
                />
                <div className={styles.thumbnailOverlay}>
                  <span className={styles.ongoingBadge}>Recurring</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                {/* Meta */}
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {meeting.date}
                  </span>
                  {meeting.time && (
                    <span className={styles.metaItem}>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {meeting.time}
                    </span>
                  )}
                </div>

                {/* Title & speaker */}
                <h3 className={styles.cardTitle}>{meeting.title}</h3>
                <p className={styles.speaker}>
                  <span className={styles.speakerDot} />
                  {meeting.speaker}
                </p>
                <p className={styles.topic}>{meeting.topic}</p>

                {/* CTA */}
                <a
                  href={meeting.registrationLink ?? "#"}
                  className={styles.joinBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Register for ${meeting.title}`}
                >
                  Register to Join
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
