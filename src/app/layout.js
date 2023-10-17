import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import "./globals.css";

const jbmono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Leaderboard — OpenHackDay Sri Lanka - 2023",
  description:
    "OpenHackDay Sri Lanka 2023 is a month-long event organized by GitHub Community Sri Lanka to celebrate Hacktoberfest 2023.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn("dark:bg-void dark:text-white", jbmono.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
