import { sectionIds } from "@/constants/sectionId";

export default function Importance() {
  return (
    <section
      id={sectionIds.diversityImportance}
      className="text-center bg-[#EEEEEE]"
    >
      <div className="py-[4.25rem] px-10">
        <div className="max-w-[62.188rem] mx-auto text-body-text">
          <h2 className="heading">
            Why is diversity, equity, and inclusion in medical research
            important?
          </h2>
          <p className="mt-10 leading-7">
            For a new medicine to truly help the people it is intended for,
            individuals from diverse backgrounds need to be part of the research
            studies for that medicine. People of different genders, ages, ethnic
            backgrounds, physical capabilities, and socioeconomic statuses are
            needed.
          </p>
        </div>
      </div>
    </section>
  );
}
