import NotFoundSection from "@/components/notFoundSection";
import Navbar from "@/components/navBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <NotFoundSection />
    </main>
  );
}
