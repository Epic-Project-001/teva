import CoupleOnCouchImage from "./ui/CoupleOnCouchImage";

const challenges: string[] = [
  "Better ethical principles, oversight by multiple parties, and transparency with study participants are helping to overcome medical mistrust.",
  "Diversity initiatives and increasing societal awareness of underrepresentation in medical research are helping to combat unconscious bias.",
  "Educational initiatives and community outreach are helping to educate diverse communities and raise awareness about opportunities to participate in research studies.",
  "Participant support related to language, transportation, and cost factors are making research studies more accessible to people in underserved communities.",
];

export default function TodaysReseachStudies() {
  return (
    <section className="flex text-body-text justify-center gap-[7.625rem] px-[6.625rem]  bg-[#EEEEEE] py-[6.938rem]">
      <CoupleOnCouchImage invertCircle />
      <div className="max-w-[43.125rem] w-full">
        <h2 className="text-32">
          Today’s research studies are designed to overcome past challenges.
        </h2>
        <ul className="mt-10 w-full list-disc ml-5">
          {challenges.map((challenge) => (
            <li className="leading-7" key={challenge}>
              {challenge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
