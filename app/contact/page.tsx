import ContactBody from "@/components/contactBody";
import ContactHero from "@/components/contactHero";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact Us | SpiritHubGlobal",
    description:
        "Get in touch with SpiritHubGlobal. Submit a prayer request, share your testimony, connect with us on social media, or send us a message directly.",
    openGraph: {
        title: "Contact Us | SpiritHubGlobal",
        description:
            "Get in touch with SpiritHubGlobal. Submit a prayer request, share your testimony, or send us a message.",
        url: "https://spirithubglobal.com/contact",
    },
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <ContactHero />
            <ContactBody />
            <Footer />
        </main>
    );
}