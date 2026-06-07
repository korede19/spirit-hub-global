import type { Metadata } from "next";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import DonateHero from "@/components/donateHero";
import DonateBody from "@/components/donateBody";

export const metadata: Metadata = {
    title: "Donate | SpiritHubGlobal",
    description:
        "Partner with SpiritHubGlobal through your donations and seeds. Every giving advances the Kingdom of God across nations.",
    openGraph: {
        title: "Donate | SpiritHubGlobal",
        description:
            "Partner with SpiritHubGlobal through your donations and seeds. Every giving advances the Kingdom of God across nations.",
        url: "https://spirithubglobal.com/donate",
    },
};

export default function DonatePage() {
    return (
        <main>
            <Navbar />
            <DonateHero />
            <DonateBody />
            <Footer />
        </main>
    );
}