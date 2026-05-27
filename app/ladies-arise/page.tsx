import Footer from "@/components/footer";
import LadiesConnect from "@/components/ladiesConnect";
import LadiesHero from "@/components/ladiesHero";
import LadiesIntro from "@/components/ladiesIntro";
import LadiesTeachings from "@/components/ladiesTeachings";
import Navbar from "@/components/navBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Ladies Arise | SpiritHubGlobal",
    description:
        "Ladies Arise is a ministry empowering and awakening women to grasp their identity, inner potential, and fullness in Christ Jesus. Weekly meetings every Thursday on Telegram.",
    openGraph: {
        title: "Ladies Arise | SpiritHubGlobal",
        description:
            "Empowering and awakening women to grasp their identity, inner potential, and fullness in Christ Jesus.",
        url: "https://spirithubglobal.org/ladies-arise",
    },
};

export default function LadiesArisePage() {
    return (
        <main>
            <Navbar />
            <LadiesHero />
            <LadiesIntro />
            <LadiesTeachings />
            <LadiesConnect />
            <Footer />
        </main>
    );
}