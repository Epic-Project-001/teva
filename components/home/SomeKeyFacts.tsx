import SectionPicture from "../SectionPicture";
import ManAndAkid from "/public/assets/man-and-a-kid.jpeg";

type Fact = {
  text: string;
  inner?: string[];
};

const facts: Fact[] = [
  {
    text: "Research that tests how well new investigational medical approaches work in people is called a clinical trial or clinical study. Investigational means a potential drug, treatment, or vaccine is not approved by the FDA, but can be given to people as part of a clinical study.",
  },
  {
    text: "Studies in people are only done after years of laboratory research show that an investigational medicine/treatment may be useful.",
  },
  {
    text: "These studies are done in phases:",
    inner: [
      "Phase 1: First use of a new investigational medicine/treatment, usually in healthy volunteers",
      "Phase 2: Initial testing in patients to learn about whether the investigational medicine/treatment works to prevent or treat the proposed indicated.",
      "Phase 3: Further testing to learn about how well the investigational medicine/treatment works in the disease that it is meant to treat, to determine the correct dosage, and to better understand possible side effects.",
      "Phase 4: After a medicine/treatment is approved, Phase 4 studies are a way to keep learning about a medicine/treatment in the real world when doctors prescribe it in everyday medical practice",
    ],
  },
  {
    text: "In today’s research studies, participants’ health and safety are the most important things.",
  },
  {
    text: "Being in a research study is 100% voluntary. A participant can decide to stop being in a study at any time.",
  },
  {
    text: "Data collected from research studies form the foundation for approval of new medicines/treatments by health authorities.",
  },
];

export default function SomeKeyFacts() {
  return (
    <section className="xl:py-[6.5rem] items-center flex flex-col xl:flex-row justify-center gap-28 xl:gap-[3.125rem] text-body-text xl:px-[6.625rem] py-[3.75rem] px-6">
      <div className="max-w-[43.125rem] w-full">
        <h2 className="heading">Some key facts about research studies</h2>
        <ul className="grid gap-[0.938rem] xl:gap-0 mt-10 list-disc ml-5">
          {facts.map((fact) => (
            <li key={fact.text} className="leading-7 max-w-[35.188rem]">
              {fact.text}
              {fact.inner && (
                <ul
                  style={{ listStyleType: "circle" }}
                  className="ml-5 mt-[0.938rem] xl:mt-0 grid gap-[0.938rem] xl:gap-0"
                >
                  {fact.inner.map((innerText) => (
                    <li key={innerText} className="inner-text leading-7">
                      {innerText}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <SectionPicture
        src={ManAndAkid}
        alt="Hispanic couple smile at each other as they embrace, Teva Clinical Trials, diversity, research, health equity,"
      />
    </section>
  );
}
