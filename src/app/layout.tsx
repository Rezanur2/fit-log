import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fit Log",
  description: "A simple hero app built with Next.js 16 and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.className} h-full antialiased min-h-full flex flex-col`}
      >
        <WorkoutProvider>
        <Navbar />
          {children}
        <Footer />
          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
