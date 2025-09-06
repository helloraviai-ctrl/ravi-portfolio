
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Singh | AI Innovator & Engineer",
  description: "Ravi Singh – Electronics & Communication Engineer passionate about AI, building intelligent solutions to transform India and empower the future.",
  openGraph: {
    title: "Ravi Singh | AI Innovator & Engineer",
    description: "Ravi Singh – Electronics & Communication Engineer passionate about AI, building intelligent solutions to transform India and empower the future.",
    images: ["/og.png"]
  },
  metadataBase: new URL("https://example.com"), // replace when domain ready
  keywords: ["Ravi Singh", "AI Engineer India", "Artificial Intelligence Innovator", "AI Portfolio", "Electronics and Communication Engineer", "AI Projects India", "Bharat AI"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pt-20 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
