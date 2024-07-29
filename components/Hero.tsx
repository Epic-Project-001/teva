import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedText from "./ui/AnimatedText";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 19.24%), url('/assets/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col text-white items-center justify-center h-[100svh] max-h-[850px]"
    >
      <div className="max-w-[996px] flex flex-col items-center justify-center">
        <AnimatedText>
          <h1 className="text-[4.5rem] ">Diversity, equity, and inclusion</h1>
        </AnimatedText>
        <p className="text-2xl leading-9 text-center">
          We are committed to empowering diverse communities to learn about and
          participate in medical research.
        </p>
        <Link
          href="/"
          className="mt-11 flex gap-1.5 items-center hover:underline"
        >
          <span className="leading-tight">
            Interested in partnering with us?
          </span>
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
