export interface Meeting {
  id: string;
  title: string;
  speaker: string;
  date: string;
  time?: string;
  topic: string;
  youtubeId?: string;
  isOngoing: boolean;
  registrationLink?: string;
  thumbnail?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  downloadLink: string;
  category: string;
  year?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
