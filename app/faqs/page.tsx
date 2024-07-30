import FaqsHero from "@/components/faqs/FaqsHero";
import QuestionsAndAnswers from "@/components/faqs/QuestionsAndAnswers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently Asked Questions",
};

export default function FAQs() {
  return (
    <>
      <FaqsHero />
      <QuestionsAndAnswers />
    </>
  );
}
