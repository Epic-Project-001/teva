import PrimaryLink from "@/components/PrimaryLink";
import { paths } from "@/constants/paths";
import { sectionIds } from "@/constants/sectionId";

type FAQ = {
  question: string;
  answer: string;
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

export default function QuestionsAndAnswers() {
  return (
    <section
      id={sectionIds.questionsAndAnswers}
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
      <PrimaryLink className="mx-auto mt-10 w-fit" href={paths.signUp}>
        Sign up
      </PrimaryLink>
    </section>
  );
}
