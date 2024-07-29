import AtTeva from "@/components/AtTeva";
import CTAs from "@/components/CTAs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Importance from "@/components/Importance";
import Navbar from "@/components/Navbar";
import OurGoal from "@/components/OurGoal";
import ReasonsForLackOfDiversity from "@/components/ReasonsForLackOfDiversity";
import SomeKeyFacts from "@/components/SomeKeyFacts";
import TodaysReseachStudies from "@/components/TodaysReseachStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <Importance />
      <OurGoal />
      <ReasonsForLackOfDiversity />
      <TodaysReseachStudies />
      <AtTeva />
      <SomeKeyFacts />
      <CTAs />
    </>
  );
}
