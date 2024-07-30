"use client";

import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/InputField";
import PrimaryLink from "@/components/PrimaryLink";
import PrimaryButton from "@/components/PrimaryButton";

const schema = yupResolver(
  yup.object({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .trim()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{1,}$/,
        "Incomplete email"
      ),
  })
);

export default function SignUp() {
  const methods = useForm({ resolver: schema });

  const onSubmit = methods.handleSubmit(() => {});
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className="h-full flex flex-col items-center justify-center px-6 xl:px-40 w-full max-w-[75rem] mx-auto"
      >
        <h2 className="text-[2.625rem] leading-[46.2px] lg:leading-[79.2px] text-center lg:text-[4.5rem] font-semibold lg:font-normal">
          Opt-in Form
        </h2>
        <p className="mt-5 text-2xl leading-9 text-center text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <div className="mt-16 lg:mt-[6.25rem] flex-col gap-4 md:flex-row w-full flex md:gap-8">
          <InputField label="First Name" id="firstname" />
          <InputField label="Last Name" id="lastname" />
          <InputField label="Email" id="email" />
        </div>
        <PrimaryButton
          className="mt-16 w-full md:w-fit lg:mt-20 md:mt-[7rem]"
          type="submit"
        >
          Submit
        </PrimaryButton>
      </form>
    </FormProvider>
  );
}
