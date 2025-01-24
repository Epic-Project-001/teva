import AtTeva from "@/components/home/AtTeva";
import CTAs from "@/components/home/CTAs";
import Hero from "@/components/home/Hero";
import DiversityImportance from "@/components/home/DiversityImportance";
import OurGoal from "@/components/home/OurGoal";
import ReasonsForLackOfDiversity from "@/components/home/ReasonsForLackOfDiversity";
import SomeKeyFacts from "@/components/home/SomeKeyFacts";
import TodaysReseachStudies from "@/components/home/TodaysReseachStudies";
import { Metadata } from "next";
import Teva from "@/public/assets/teva-logo.png";
import { metadataImageUrl } from "@/constants/metadataImageUrl";

const title = "Teva Clinical Trials | Empowering diverse communities";
const description =
  "Medical research has a history of inequality. Teva aims to ensure people from all backgrounds have access to their research studies.";

export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    type: "article",
    title,
    description,
    url: "",
    images: [
      {
        url: metadataImageUrl,
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

export default function Home() {
  return (
    <>
      <Hero />
      <DiversityImportance />
      <OurGoal />
      <ReasonsForLackOfDiversity />
      <TodaysReseachStudies />
      <AtTeva />
      <SomeKeyFacts />
      <CTAs />
    </>
  );
}
