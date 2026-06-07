import Footer from "@/components/footer";
import MessagesHero from "@/components/messageHero/page";
import MessagesSeries from "@/components/messageSeries";
import Navbar from "@/components/navBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Messages | SpiritHubGlobal",
    description:
        "Explore our rich library of Spirit-filled teaching series — The Power Series, 40 Days Discipleship, GSP Series, The Prophetic Realm, and more.",
    openGraph: {
        title: "Messages | SpiritHubGlobal",
        description:
            "Explore our rich library of Spirit-filled teaching series — The Power Series, 40 Days Discipleship, GSP Series, The Prophetic Realm, and more.",
        url: "https://spirithubglobal.com/messages",
    },
};

export default function MessagesPage() {
    return (
        <main>
            <Navbar />
            <MessagesHero />
            <MessagesSeries />
            <Footer />
        </main>
    );
}