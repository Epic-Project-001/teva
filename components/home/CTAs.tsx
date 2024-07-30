import { paths } from "@/constants/paths";
import PrimaryLink from "../PrimaryLink";

export default function CTAs() {
  return (
    <section className="text-body-text text-center">
      <article className="bg-[#EEEEEE] p-10 flex flex-col items-center">
        <h2 className="text-[1.875rem] xl:text-5xl font-semibold xl:font-normal leading-9 xl:leading-[52.8px] max-w-[57.063rem]">
          Diversity in research studies is improving, but there is still work to
          be done.
        </h2>
        <p className="leading-8 mt-10 xl:mt-4 max-w-[45.313rem]">
          Ready to help empower your community to learn more about medical
          research and access potentially life-changing research studies?{" "}
        </p>
        <PrimaryLink href={paths.signUp} className="mt-6 w-fit mx-auto">
          Sign up
        </PrimaryLink>
      </article>
      <article className="bg-white p-10 flex flex-col items-center">
        <h2 className="text-[1.875rem] xl:text-5xl font-semibold xl:font-normal leading-9 xl:leading-[52.8px] max-w-[57.063rem]">
          Interested in finding out about research studies you may be able to
          participate in?
        </h2>
        <p className="leading-8 mt-6 max-w-[45.313rem]">
          Check out these resources:
        </p>
        <div className="flex gap-10 lg:flex-row flex-col justify-center lg:gap-20 xl:gap-[9.063rem] mt-6">
          <PrimaryLink href="/">Test Clinical Trials</PrimaryLink>
          <PrimaryLink href="/">Clinicaltrials.gov</PrimaryLink>
        </div>
      </article>
    </section>
  );
}
