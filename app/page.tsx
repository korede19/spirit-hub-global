import About from "@/components/aboutSection";
import Books from "@/components/bookSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";
import OngoingMeetings from "@/components/ongoingMeetings";
import Prayer from "@/components/prayerSection";
import PreviousMeetings from "@/components/previousMeeting";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpiritHubGlobal — Where the Spirit Moves & Lives Are Transformed",
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <OngoingMeetings />
      <PreviousMeetings />
      <Books />
      <Prayer />
      <Footer />
    </main>
  );
}
