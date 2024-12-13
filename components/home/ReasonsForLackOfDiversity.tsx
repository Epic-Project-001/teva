import Settings from "/public/assets/settings.svg";
import HeartBreadk from "/public/assets/heart-break.svg";
import Question from "/public/assets/question.svg";
import Inaccessibility from "/public/assets/inaccessibility.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Reason {
  icon: string | StaticImport;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Settings,
    description:
      "Unconscious bias because of ingrained beliefs about who may be interested or capable of participating.",
  },
  {
    icon: HeartBreadk,
    description:
      "Medical mistrust due to historical events and patients’ personal experiences with the healthcare system.",
  },
  {
    icon: Question,
    description:
      "Lack of knowledge/awareness because patients simply don’t know these options exist, and medical professionals may not have time to stay up-to-date on available studies.",
  },
  {
    icon: Inaccessibility,
    description:
      "Inaccessibility due to factors that make participation difficult (eg, lack of language or disability accommodations, and time/expense for getting to the study site).",
  },
];

export default function ReasonsForLackOfDiversity() {
  return (
    <section className="py-[3.75rem] xl:py-[6.5rem] flex flex-col items-center xl:flex-row justify-center px-6 xl:px-[6.625rem] gap-28 xl:gap-[7.625rem] xl:items-start text-body-text">
      <div className="max-w-[75.125rem] w-full flex flex-col items-center">
        <h2 className="heading leading-9 text-center">
          There has been a long history of inequality in medical research,
          leading to underrepresentation of some communities.
        </h2>
        <p className="mt-6 text-center ">
          Some reasons for the lack of diversity include:
        </p>
        <ul className="mt-10 xl:grid-cols-4 grid md:grid-cols-2 gap-10 max-w-[32.125rem] xl:max-w-full">
          {reasons.map((reason) => (
            <li key={reason.description} className="h-full leading-7">
              <div className="size-[9.375rem]  mx-auto flex flex-col items-center justify-end">
                <Image
                  src={reason.icon}
                  alt={reason.description}
                  className="object-contain size-full"
                />
              </div>
              <p className="text-center mt-7 text-balance">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          By recognizing these factors, we can now do better to ensure everyone
          has access to research studies.
        </p>
      </div>
    </section>
  );
}
