import KingdomBusiness from "@/components/kingdomBusiness";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingdom Businessmen | SpiritHubGlobal",
  description:
    "Register your business with SpiritHubGlobal's Kingdom Businessmen community and connect with fellow Spirit-filled entrepreneurs.",
  openGraph: {
    title: "Kingdom Businessmen | SpiritHubGlobal",
    description:
      "Register your business with SpiritHubGlobal's Kingdom Businessmen community and connect with fellow Spirit-filled entrepreneurs.",
    url: "https://spirithubglobal.com/kingdom-businessmen",
  },
};

export default function KingdomBusinessmenPage() {
  return (
    <main>
      <Navbar />
      <KingdomBusiness />
      <Footer />
    </main>
  );
}
