"use client";

import { useState } from "react";
import { find } from "lodash";
import consents from "@/components/consent/consent-data";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";
import { paths } from "@/constants/paths";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { INSERT_ONE_SUBMISSION } from "@/helpers/graphql/gql/mutations";
import { useMutation } from "@apollo/client";
// Trying to build fresh
const countryCodeMap: any = {
  Australia: "AU",
  Argentina: "AR",
  Azerbaijan: "AZ",
  Belarus: "BY",
  Brazil: "BR",
  Canada: "CA",
  Chile: "CL",
  China: "CN",
  "Hong Kong": "HK",
  Israel: "IL",
  Indonesia: "ID",
  Japan: "JP",
  Kazakhstan: "KZ",
  Kyrgyzstan: "KG",
  Mexico: "MX",
  Malaysia: "MY",
  "New Zealand": "NZ",
  Peru: "PE",
  Russia: "RU",
  Singapore: "SG",
  "S. Korea": "KR",
  "South Africa": "ZA",
  Turkey: "TR",
  Thailand: "TH",
  "United States of America": "US",
  Ukraine: "UA",
  Uzbekistan: "UZ",
  Vietnam: "VN",
};

const schema = yupResolver(
  yup.object({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    zipCode: yup.string().required("Zip Code is required"),
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
  const [insertOneSubmission, { loading, error }] = useMutation(
    INSERT_ONE_SUBMISSION
  );

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      // google event trigger
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "gform_submission", {
          event_category: "Signup",
          event_label: "Sign Up Form",
          value: data.email,
        });
      }
      const response = await insertOneSubmission({
        variables: { data },
      });
      router.push(paths.registrationSuccesful);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
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
        <InputField label="Zip Code" id="zipCode" />
      </form>
      <ConsentComponent />
      <PrimaryButton
        className="mt-8 w-full md:w-fit lg:mt-12 md:mt-[5rem]"
        type="submit"
        form="signUpForm"
      >
        Submit
      </PrimaryButton>
    </FormProvider>
  );
}

function ConsentComponent() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mt-12 text-gray-200 text-sm ">
      <div>
        Teva Branded Pharmaceutical Products, Inc. (&quot;Teva&quot;) partners
        with third party vendors to support clinical trial initiatives,
        providing expertise in areas such as website development, hosting, and
        digital resource integration to enhance participant experience and
        engagement.
      </div>
      <div className="flex flex-row gap-4 items-start">
        <input className="inline my-1" type="checkbox" />
        <div>
          I understand and agree that any information that I submit to Jumo
          Health via this website, will be made available to Jumo Health and
          Teva.
        </div>
      </div>
      <div className="flex flex-row gap-4 items-start">
        <input className="inline my-1" type="checkbox" />
        <div>
          I authorize Teva, its affiliates, and companies working with Teva,
          including Jumo Health, to contact me by email for marketing purposes,
          such as to provide me with information about medical research and
          raise awareness about clinical research studies. I understand that I
          may choose to no longer receive further communications from Teva by
          following the unsubscribe instructions on the communication.
        </div>
      </div>
      <div>
        By clicking &lsquo;Submit&rsquo;, you are confirming that you have read
        and agree to the conditions above, as well as those outlined in Jumo
        Health&rsquo;s&nbsp;
        <a
          href="https://jumohealth.com/terms-of-use/"
          className=" underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://jumohealth.com/privacy-policy/"
          className=" underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}

function ConsentComponentOld() {
  const [changing, setChanging] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("United States of America");
  const { id, content, src } = find(consents, {
    id: country,
  }) as any;

  if (changing) {
    return (
      <div className="flex flex-wrap justify-center gap-x-4 my-12 text-sm">
        {consents.map((c: any) => {
          const { id, src } = c;
          return (
            <button
              key={id}
              className="flex flex-row items-center hover:text-teva-green"
              onClick={() => {
                setCountry(id);
                setChanging(false);
              }}
            >
              {getUnicodeFlagIcon(countryCodeMap[id])} {id}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-4">
      <input className="inline" type="checkbox" />
      <div className="flex flex-col my-12 text-xs">
        <div className="flex flex-row items-center gap-2">
          {getUnicodeFlagIcon(countryCodeMap[id])}{" "}
          {/* <Image
          alt={id}
          src={`https://www.tevapharm.com/${src}`}
          height={16}
          width={14}
        />{" "} */}
          {id}
          <button
            className="text-teva-green underline hover:text-white"
            onClick={() => setChanging(true)}
          >
            Change Country
          </button>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
