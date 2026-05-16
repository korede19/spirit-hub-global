import { Meeting, Book } from "../types/index";

export const ongoingMeetings: Meeting[] = [
  {
    id: "1",
    title: "The Spirit-Filled Life",
    speaker: "Pastor James Adeyemi",
    date: "Every Sunday",
    time: "7:00 AM WAT",
    topic: "Walking in the fullness of the Holy Spirit",
    isOngoing: true,
    registrationLink: "#",
    youtubeId: "",
  },
  {
    id: "2",
    title: "Wednesday Power Hour",
    speaker: "Evangelist Grace Obi",
    date: "Every Wednesday",
    time: "6:00 PM WAT",
    topic: "Intercession and the Power of Corporate Prayer",
    isOngoing: true,
    registrationLink: "#",
    youtubeId: "",
  },
  {
    id: "3",
    title: "Friday Night Vigil",
    speaker: "Minister David Eze",
    date: "Last Friday of the Month",
    time: "10:00 PM WAT",
    topic: "Breaking Barriers Through Worship & Prayer",
    isOngoing: true,
    registrationLink: "#",
    youtubeId: "",
  },
];

export const previousMeetings: Meeting[] = [
  {
    id: "4",
    title: "The Cross of Destiny",
    speaker: "Apostle Omolade Richard",
    date: "May 24, 2025",
    thumbnail: "/assets/the-cross.jpeg",
    topic:
      "The Cross of Destiny: Unveiling the Power of the Cross in Your Life",
    isOngoing: false,
    youtubeId: "EmYsv6eyDH4",
  },
  {
    id: "5",
    title: "The Fatness of the Earth",
    speaker: "Apostle Omolade Richard",
    date: "May 25, 2025",
    thumbnail: "/assets/The-fatness.jpeg",
    topic:
      "The Fatness of the Earth: Living in the Abundance of God's Provision",
    isOngoing: false,
    youtubeId: "YGAY-5crfLc",
  },
  {
    id: "6",
    title: "The Fire of the Holy Ghost",
    speaker: "Apostle Omolade Richard",
    date: "May 31, 2025",
    thumbnail: "/assets/holyghost.png",
    topic:
      "The Fire of the Holy Ghost: Igniting Your Spirit for a Life of Power",
    isOngoing: false,
    youtubeId: "3WzV9hlps5w",
  },
];

export const books: Book[] = [
  {
    id: "1",
    title: "Activating Creativity",
    author: "Apostle Omolade Richard",
    description:
      "A comprehensive guide to understanding and living a life of creativity powered by the Holy Spirit.",
    coverImage: "/assets/activating-creativity.jpeg",
    downloadLink: "https://amzn.eu/d/iujj0HP",
    category: "Spiritual Growth",
    year: "2023",
  },
  {
    id: "2",
    title: "Arrows",
    author: "Apostle Omolade Richard",
    description:
      "The Archer, The Quiver and The Enemies: A powerful resource on the art of intercession",
    coverImage: "/assets/arrows.jpeg",
    downloadLink: "https://selar.com/j33s",
    category: "Prayer",
    year: "2022",
  },
  {
    id: "3",
    title: "Ella, Elena and the Angels",
    author: "Apostle Omolade Richard",
    description:
      "A delightful children's book that introduces young readers to the power of faith through the adventures of Ella and Elena.",
    coverImage: "/assets/ella.png",
    downloadLink: "/assets/Ella-Elena-The-Angels.pdf",
    category: "Children's Resources",
    year: "2024",
  },
  {
    id: "4",
    title: "90 Days Bible Study Plan",
    author: "Apostle Omolade Richard",
    description:
      "A structured 90-day plan to guide believers through the Bible, fostering daily engagement and spiritual growth.",
    coverImage: "/assets/bs-plan.png",
    downloadLink: "/assets/90-days-bible-reading-plan_20250928_214407_0000.pdf",
    category: "Bible Study",
    year: "2023",
  },
  {
    id: "5",
    title: "30 Days Bible Reading Plan",
    author: "Apostle Omolade Richard",
    description:
      "A structured 30-day plan to guide believers through the Bible, fostering daily engagement and spiritual growth.",
    coverImage: "/assets/br-plan.png",
    downloadLink: "/assets/30-days-bible-reading-plan.pdf",
    category: "Bible Study",
    year: "2023",
  },
  {
    id: "6",
    title: "6 Months Bible Reading Plan",
    author: "Apostle Omolade Richard",
    description:
      "A structured 6-month plan to guide believers through the Bible, fostering daily engagement and spiritual growth.",
    coverImage: "/assets/6-br-plan.png",
    downloadLink: "/assets/6-months-bible-reading-plan.pdf",
    category: "Bible Study",
    year: "2023",
  },
];

export const items = [
  {
    id: "prayer",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    eyebrow: "We're Here For You",
    heading: "Let's stand with you in prayer",
    body: "You don't have to face life's challenges alone. Submit your prayer request and our community of intercessors will stand in agreement with you.",
    cta: "Submit Your Prayer Request",
    href: "https://spirithubglobal.org/prayer-request/",
    accent: true,
  },
  {
    id: "salvation",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    eyebrow: "A New Beginning",
    heading: "Have you given your life to Christ?",
    body: "The best decision you'll ever make. If you've recently given your life to Christ — or are thinking about it — we want to walk this journey with you.",
    cta: "Learn About Your New Life",
    href: "https://spirithubglobal.org/new-converts-registration/",
    accent: false,
  },
  {
    id: "testimony",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    eyebrow: "Your Story Matters",
    heading: "Do you have a testimony?",
    body: "God's faithfulness in your life can spark faith in someone else's. Share what He has done for you — your testimony is a weapon and a witness.",
    cta: "Share Your Story",
    href: "https://spirithubglobal.org/testimony-form/",
    accent: false,
  },
];
