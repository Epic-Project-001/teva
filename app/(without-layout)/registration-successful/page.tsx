import PrimaryLink from "@/components/PrimaryLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Success",
};

export default function RegistrationSuccessful() {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 w-full max-w-[62.25rem] mx-auto">
      <h2 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
        Registration received
      </h2>
      <p className="mt-5 text-2xl leading-9 text-center text-balance">
        Thank you for taking this important step to get involved in medical
        research in your community!
      </p>
      <PrimaryLink
        href="/"
        className="mt-16 w-full md:w-fit lg:mt-20 md:mt-[7rem]"
      >
        Return to the home page
      </PrimaryLink>
    </section>
  );
}
