import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedText from "./ui/AnimatedText";

export default function Hero() {
  return (
    <section className="bg-[url('/assets/hero-bg.webp')] bg-no-repeat bg-[center_left_-30rem] bg-cover sm:bg-center text-white h-[100svh] max-h-[850px]">
      <div
        className="h-full flex flex-col items-center justify-center px-6"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 19.24%)",
        }}
      >
        <div className="max-w-[996px] flex flex-col items-center justify-center">
          <AnimatedText>
            <h1 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
              Diversity, equity, and inclusion
            </h1>
          </AnimatedText>
          <p className="text-2xl mt-5 leading-9 text-center text-balance md:text-wrap">
            We are committed to empowering diverse communities to learn about
            and participate in medical research.
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
      </div>
    </section>
  );
}
