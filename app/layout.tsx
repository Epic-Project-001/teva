import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Teva - Home", template: "Teva - %s" },
  description: "Diversity, equity, and inclusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={lato.className}>
        <main className="h-[100svh] overflow-y-auto relative">{children}</main>
      </body>
    </html>
  );
}
