import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

import CursorGradient from "@/components/CursorGradient";
// import { Meteors } from "@/components/meteors";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Suknaic - Engenheiro de software e designer de UI/UX",
  description:
    "Portfólio de Felipe Suknaic, mostrando experiência em React, Next.js e design de UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGradient
            size="w-64 h-64 md:w-96 md:h-96"
            smoothing={0.15}
            colors={{
              light: {
                gradientStart: "#f0fdf4",
                gradientEnd: "transparent",
                pattern: "#86efac",
              },
              dark: {
                gradientStart: "#052e16",
                gradientEnd: "transparent",
                pattern: "#166534",
              },
            }}
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-base space-y-4 z-10 ">
            <Navbar />
            <div className="sm:mx-10">
              {/* <Meteors number={30} /> */}
              {children}
            </div>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
