import SignUpForm from "@/components/sign-up/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUp() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 w-full max-w-[75rem] mx-auto">
      <h2 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
        Stay Connected
      </h2>
      <p className="mt-5 text-2xl leading-9 text-center text-balance">
        Sign up for our email newsletters to learn more about medical research
        and raise awareness about research studies in your community.
      </p>
      <SignUpForm />
    </div>
  );
}
