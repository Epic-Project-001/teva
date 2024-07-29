import CoupleOnCouchImage from "./ui/CoupleOnCouchImage";

const reasons: string[] = [
  "Medical mistrust due to historical events and patients’ personal experiences with the healthcare system.",
  "Unconscious bias because of ingrained beliefs about who may be interested or capable of participating.",
  "Lack of knowledge/awareness because patients simply don’t know these options exist, and medical professionals may not have time to stay up-to-date on available studies.",
  "Inaccessibility due to factors that make participation difficult (eg, lack of language or disability accommodations, and time/expense for getting to the study site).",
];

export default function ReasonsForLackOfDiversity() {
  return (
    <section className="py-[6.5rem] flex justify-center px-[6.625rem] gap-[7.625rem] text-body-text">
      <div className="max-w-[43.125rem]">
        <h2 className="text-32 leading-9">
          Historically, there was inequality in medical research, leading to
          underrepresentation of some communities.
        </h2>
        <p className="mt-6">Some reasons for the lack of diversity included:</p>
        <ul className="mt-10 list-disc">
          {reasons.map((reason) => (
            <li key={reason} className="leading-7">
              {reason}
            </li>
          ))}
        </ul>
        <p className="mt-10">
          By recognizing these factors, we can now do better to ensure everyone
          has access to research studies.
        </p>
      </div>
      <CoupleOnCouchImage />
    </section>
  );
}
