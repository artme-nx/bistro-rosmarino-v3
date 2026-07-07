import type { Metadata } from "next";
import { Playfair_Display, Karla } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bistro Rosmarino — Zadar | Mediteranski bistro s dušom ružmarina",
  description:
    "Bistro Rosmarino u Zadru — mali bistro vođen ružmarinom. Riba s roštilja, tartufi, domaća pašticada i plodovi mora. 4.9 ★ na TripAdvisoru. Rezervirajte stol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${playfair.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
