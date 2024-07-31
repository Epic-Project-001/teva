"use client";

import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";
import { paths } from "@/constants/paths";

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

export default function SignUpForm() {
  const router = useRouter();
  const methods = useForm({ resolver: schema });
  const onSubmit = methods.handleSubmit(() => {
    router.push(paths.registrationSuccesful);
  });

  return (
    <FormProvider {...methods}>
      <form
        id="signUpForm"
        onSubmit={onSubmit}
        className="mt-16 lg:mt-[6.25rem] flex-col gap-4 md:flex-row w-full flex md:gap-8"
      >
        <InputField label="First Name" id="firstname" />
        <InputField label="Last Name" id="lastname" />
        <InputField label="Email" id="email" />
      </form>
      <PrimaryButton
        className="mt-16 w-full md:w-fit lg:mt-20 md:mt-[7rem]"
        type="submit"
        form="signUpForm"
      >
        Submit
      </PrimaryButton>
    </FormProvider>
  );
}
