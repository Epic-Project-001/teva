import FaqsHero from "@/components/faqs/FaqsHero";
import QuestionsAndAnswers from "@/components/faqs/QuestionsAndAnswers";
import { metadataImageUrl } from "@/constants/metadataImageUrl";
import { Metadata } from "next";

const title = "Frequentely Asked Questions | Teva Diversity";
const description =
  "Learn more about the importance of diversity in medical research and how Teva aims to ensure more diversity in their clinical trials.";

export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    type: "article",
    title,
    description,
    url: metadataImageUrl,
    images: [
      {
        url: "",
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: metadataImageUrl,
  },
};

export default function FAQs() {
  return (
    <>
      <FaqsHero />
      <QuestionsAndAnswers />
    </>
  );
}
