import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedText from "../AnimatedText";

export default function Hero() {
  return (
    <section className="bg-[url('/assets/hero-bg.jpeg')] bg-no-repeat bg-[center_left_-21rem] bg-cover sm:bg-center xl:bg-top text-white h-[100svh] max-h-[850px]">
      <div
        className="h-full flex flex-col items-center justify-center px-6"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 19.24%)",
        }}
      >
        <div className="md:pt-[200px] max-w-[1000px] flex flex-col items-center justify-center">
          <AnimatedText>
            <h1 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
              Diverse Voices, Stronger Science
            </h1>
          </AnimatedText>
          <p className="text-2xl mt-5 leading-9 text-center text-balance md:text-wrap">
            Empowering diverse communities to learn about and participate in
            medical research
          </p>
          <Link
            href="/"
            className="mt-11 cursor-pointer flex gap-1.5 items-center hover:underline"
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
