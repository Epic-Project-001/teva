import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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

        {/* Clarity */}
        <Script
          type="text/javascript"
          id="clarity"
        >{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "pdg6u665dm");`}</Script>

        {/* Google tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S5S0Y9P2D0"
        />
        <Script id="g-tag">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-S5S0Y9P2D0');`}</Script>
      </body>
    </html>
  );
}
