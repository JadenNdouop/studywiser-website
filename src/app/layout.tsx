import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "StudyWiser — Tutoring for Every Subject",
  description:
    "StudyWiser matches students with vetted tutors in every subject, in-person or online, anywhere in the U.S. Personalized, one-on-one support from elementary through college.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-sw-surface text-sw-on-surface">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
