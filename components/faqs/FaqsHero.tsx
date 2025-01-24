import { paths } from "@/constants/paths";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import HeroBg from "@/public/assets/faq-hero-bg.jpeg";
import Image from "next/image";

export default function FaqsHero() {
  return (
    <section className="relative max-h-[850px] h-[100svh] text-white">
      <div className="absolute inset-0">
        <div className="relative size-full">
          <Image
            src={HeroBg}
            alt="Hispanic woman wearing overalls stands in a greenhouse, Teva Clinical
        Trials, diversity, research, health equity."
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="h-full relative flex flex-col items-center justify-center px-6"
        // style={{
        //   background:
        //     "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 19.24%)",
        // }}
      >
        <h1 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
          Frequently Asked Questions
        </h1>
        <Link
          href={paths.questionsAndAnswers}
          className="mt-11 cursor-pointer flex gap-1.5 items-center hover:underline"
        >
          <span className="leading-tight">Learn More</span>
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
