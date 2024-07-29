import Link from "next/link";
import { paths } from "@/constants/paths";
import { FiArrowRight } from "react-icons/fi";
import PrimaryLink from "@/components/ui/PrimaryLink";
import { Metadata } from "next";

type FAQ = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently Asked Questions",
};

const faqs: FAQ[] = [
  {
    question: "Who can join a research study?",
    answer:
      "Almost anyone! Some research studies are looking for healthy adults or healthy children, while others are enrolling people with a specific medical condition. People of different gender, age, ethnic background, physical capability, and socioeconomic status are needed.",
  },
  {
    question:
      "Why should I consider participating in medical research studies?",
    answer:
      "In order for new medicines to be developed, many volunteers are needed for research studies. For a new medicine to truly help the people it is intended for, a diverse group of people need to be part of the research studies for that medicine.",
  },
  {
    question:
      "How is Teva working towards better representation in medical research?",
    answer:
      "Teva is committed to improving diversity in medical research through training and outreach programs. We are working directly with underrepresented communities to build trust and increase awareness.",
  },
  {
    question:
      "How can I help raise awareness about research studies in my community?",
    answer: "Learn more by signing up for our email newsletters.",
  },
];

export default function FAQs() {
  return (
    <section>
      <article className="max-h-[850px] h-[100svh] bg-[url('/assets/faq-hero-bg.webp')] bg-no-repeat bg-cover bg-center text-white">
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
            href="#questions"
            className="mt-11 cursor-pointer flex gap-1.5 items-center hover:underline"
          >
            <span className="leading-tight">Learn More</span>
            <FiArrowRight />
          </Link>
        </div>
      </article>
      <article
        id="questions"
        className="bg-[#EEEEEE] py-8 px-6 xl:px-10 xl:py-[9.688rem] text-body-text"
      >
        <ul className="grid gap-10 max-w-[75rem] mx-auto">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <p className="text-[1.125rem] leading-8">{faq.question}</p>
              <p className="leading-7 mt-2">{faq.answer}</p>
            </li>
          ))}
        </ul>
        <PrimaryLink className="mx-auto mt-10 w-fit" href="/">
          Sign up
        </PrimaryLink>
      </article>
    </section>
  );
}
