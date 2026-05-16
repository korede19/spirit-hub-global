import styles from "./styles.module.css";
import { books } from "@/utils/data";
import Image from "next/image";

export default function Books() {
  return (
    <section
      className={styles.section}
      id="books"
      aria-label="Books for Download"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="sectionLabel">Free Resources</span>
          <h2 className="sectionTitle">Books &amp; Publications</h2>
          <p className="sectionSubtitle">
            Download our library of Spirit-filled resources — completely free.
            Equip yourself and share with others.
          </p>
        </div>

        <div className={styles.grid}>
          {books.map((book, index) => (
            <article
              key={book.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book cover */}
              <div className={styles.coverWrap}>
                <Image
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className={styles.cover}
                  loading="lazy"
                  width={1000}
                  height={1400}
                />
                {/* Shine effect */}
                <div className={styles.coverShine} aria-hidden="true" />
                {/* Category badge */}
                <span className={styles.categoryBadge}>{book.category}</span>
              </div>

              {/* Card info */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{book.title}</h3>
                <p className={styles.author}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {book.author}
                </p>
                <p className={styles.description}>{book.description}</p>

                <a
                  href={book.downloadLink}
                  className={styles.downloadBtn}
                  download
                  aria-label={`Download ${book.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Free
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
