import type { Metadata } from "next";
import Navbar from "@/components/navBar";
import VisionHero from "@/components/visionHero";
import VisionIntro from "@/components/visionIntro";
import VisionLogo from "@/components/visionLogo";
import VisionPattern from "@/components/visionPattern";
import Footer from "@/components/footer";


export const metadata: Metadata = {
    title: "The Vision | SpiritHubGlobal",
    description:
        "Spirit Hub Global Ministries is a non-denominational ministry with an Apostolic and Prophetic mandate to guide people into the core of God's life and ways.",
    openGraph: {
        title: "The Vision | SpiritHubGlobal",
        description:
            "Spirit Hub Global Ministries is a non-denominational ministry with an Apostolic and Prophetic mandate to guide people into the core of God's life and ways.",
        url: "https://spirithubglobal.org/the-vision",
    },
};

export default function VisionPage() {
    return (
        <main>
            <Navbar />
            <VisionHero />
            <VisionIntro />
            <VisionLogo />
            <VisionPattern />
            <Footer />
        </main>
    );
}