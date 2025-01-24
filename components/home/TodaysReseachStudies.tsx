import SectionPicture from "../SectionPicture";
import ElderlyWomanWearingGlasses from "/public/assets/elderly-woman-wearing-glasses.jpeg";
import CoupleOnCouch from "/public/assets/couple-on-couch.webp";
import { sectionIds } from "@/constants/sectionId";

const challenges: string[] = [
  "<b>Building trust:</b> Better ethical principles, oversight by multiple parties, and transparency with study participants are helping to overcome medical mistrust.",
  "<b>Increasing knowledge/awareness:</b> Educational initiatives and community outreach are helping to educate diverse communities and raise awareness about opportunities to participate in research studies.",
  "<b>Reducing bias:</b> Diversity initiatives are helping to broaden who is invited to participate in research studies.",
  "<b>Improving accessibility:</b> Participant support related to language, transportation, and cost factors are making research studies more accessible to people in diverse communities.",
];

export default function TodaysResearchStudies() {
  return (
    <section
      id={sectionIds.learnMoreAboutResearchStudies}
      className="flex flex-col-reverse xl:flex-row text-body-text justify-center items-center gap-28 xl:gap-[7.625rem] px-6 xl:px-[6.625rem] bg-[#EEEEEE] py-[3.75rem] xl:py-[6.938rem]"
    >
      <div className="hidden xl:block shrink-0">
        <SectionPicture
          invertCircle
          src={ElderlyWomanWearingGlasses}
          alt="Three Asian American women of varying ages look at a camera, Teva Clinical Trials, diversity, research, health equity."
        />
      </div>
      <div className="block xl:hidden shrink-0">
        <SectionPicture
          invertCircle
          src={ElderlyWomanWearingGlasses}
          alt="Hispanic couple smile at each other as they embrace, Teva Clinical Trials, diversity, research, health equity,"
        />
      </div>
      <div className="max-w-[43.125rem]">
        <h2 className="heading">
          Today’s research studies are designed to overcome challenges.
        </h2>
        <ul className="mt-10 w-full list-disc ml-5">
          {challenges.map((challenge, index) => (
            <li
              className="leading-7 max-w-[39.5rem]"
              key={index}
              dangerouslySetInnerHTML={{ __html: challenge }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
