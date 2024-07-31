import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tevaSans = localFont({
  src: [
    {
      path: "./TevaSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./TevaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TevaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
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
      <body className={tevaSans.className}>
        <main className="h-[100svh] overflow-y-auto relative">{children}</main>
      </body>
    </html>
  );
}
