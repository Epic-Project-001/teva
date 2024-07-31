import { paths } from "@/constants/paths";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function FaqsHero() {
  return (
    <section className="max-h-[850px] h-[100svh] bg-[url('/assets/faq-hero-bg.jpeg')] bg-no-repeat bg-cover xl:bg-top bg-center text-white">
      <div
        className="h-full flex flex-col items-center justify-center px-6"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 19.24%)",
        }}
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
