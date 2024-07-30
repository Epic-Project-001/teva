import Logo from "@/components/Logo";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full flex flex-col bg-[url('/assets/faq-hero-bg.jpeg')] bg-no-repeat bg-cover bg-center text-white">
      <div
        style={{ backdropFilter: "blur(40px)" }}
        className="h-full gap-8 overflow-y-auto bg-[rgb(0,0,0,0.7)] py-10 flex-1 flex flex-col"
      >
        <Logo isCropped={false} className="mx-auto" />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
