import AtTeva from "@/components/home/AtTeva";
import CTAs from "@/components/home/CTAs";
import Hero from "@/components/home/Hero";
import Importance from "@/components/home/Importance";
import OurGoal from "@/components/home/OurGoal";
import ReasonsForLackOfDiversity from "@/components/home/ReasonsForLackOfDiversity";
import SomeKeyFacts from "@/components/home/SomeKeyFacts";
import TodaysReseachStudies from "@/components/home/TodaysReseachStudies";

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
