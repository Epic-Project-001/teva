"use client";

import { useState, useEffect, ReactElement } from "react";
import { find } from "lodash";
import consents from "@/components/consent/consent-data";
import JHInput from "@/components/TextInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";
import { paths } from "@/constants/paths";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { INSERT_ONE_SUBMISSION } from "@/helpers/graphql/gql/mutations";
import { useMutation } from "@apollo/client";
import { findErrorMessages } from "@/helpers";
import { StoreProvider, useBoundStore } from "@/store/provider";
import JHCheckbox from "../Checkbox";
import { ENVIRONMENT } from "@/constants";
import MultiselectDropdown from "@/components/MultiselectDropdown";

// Add type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}
const trackGAEvent = (
  eventName: string,
  eventParams: Record<string, any> | undefined
) => {
  if (
    // ENVIRONMENT === "production" &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    try {
      window.gtag("event", eventName, eventParams);
      console.log(`GA Event tracked: ${eventName}`, eventParams);
    } catch (error) {
      console.error("Error tracking GA event:", error);
    }
  } else {
    console.log(`[DEV] GA Event would track: ${eventName}`, eventParams);
  }
};

// This is needed for the window.gtag property
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

// Define type for consent data
interface ConsentData {
  id: string;
  content: React.ReactNode;
  src: string;
  extended?: React.ReactNode;
}
type CountryCodeMap = {
  [key: string]: string;
};

const countryCodeMap: CountryCodeMap = {
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

const communityOptions = [
  { value: "black", label: "Black" },
  { value: "hispanic", label: "Hispanic" },
  { value: "asian", label: "Asian" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
];

export default function SignUpForm() {
  return (
    <StoreProvider>
      <SignUpFormComponent />
    </StoreProvider>
  );
}

function SignUpFormComponent() {
  const router = useRouter();
  const { values, getFormStatus, resetForm, setField, setShowErrors } =
    useBoundStore((state) => state);

  // Track form view on component mount
  useEffect(() => {
    trackGAEvent("form_view", {
      event_category: "Signup",
      event_label: "Sign Up Form Viewed",
    });
  }, []);

  const [insertOneSubmission, { loading, data, error }] = useMutation(
    INSERT_ONE_SUBMISSION
  );

  const { email, firstname, lastname, zipCode } = values;
  const { errors, success } = getFormStatus();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!success) {
        setShowErrors(true);
        // Track validation errors
        trackGAEvent("gform_validation_error", {
          event_category: "Signup",
          event_label: "Sign Up Form Validation Error",
          value: values.email,
          errors: Object.keys(errors).join(","),
        });
        return;
      }

      // Track form submission attempt - this is the key event that was missing
      trackGAEvent("gform_submission", {
        event_category: "Signup",
        event_label: "Sign Up Form",
        value: values.email,
      });

      const allCommunities = ["black", "hispanic", "asian"];
      const communityFlags = Object.fromEntries(
        allCommunities.map((c) => [c, values.community?.includes(c) || false])
      );

      await insertOneSubmission({
        variables: {
          data: {
            ...values,
            ...communityFlags,
          },
        },
      });

      // Track successful submission after the API call succeeds
      trackGAEvent("gform_submission_success", {
        event_category: "Signup",
        event_label: "Sign Up Form Success",
        value: values.email,
      });

      resetForm();
      router.push(paths.registrationSuccesful);
    } catch (error) {
      const err = error as Error;
      console.error("Error submitting form:", err);

      // Track unexpected errors
      trackGAEvent("gform_submission_error", {
        event_category: "Signup",
        event_label: "Sign Up Form Unexpected Error",
        value: values.email,
        error: err.message || "Unknown error",
      });
    }
  };

  return (
    <form
      id="signUpForm"
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full"
    >
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 mt-16 lg:mt-[6.25rem] gap-4 w-full md:gap-8">
        <JHInput
          id="firstname"
          errorMessage={findErrorMessages(errors, "firstname")}
          label="First Name"
          value={firstname}
          onValueChange={(value: string) => setField("firstname", value)}
        />
        <JHInput
          id="lastname"
          label="Last Name"
          errorMessage={findErrorMessages(errors, "lastname")}
          value={lastname}
          onValueChange={(value: string) => setField("lastname", value)}
        />
        <JHInput
          id="email"
          errorMessage={findErrorMessages(errors, "email")}
          label="Email"
          value={email}
          onValueChange={(value: string) => setField("email", value)}
        />
      </div>
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 mt-4 gap-4 w-full md:gap-8">
        <JHInput
          id="zipCode"
          errorMessage={findErrorMessages(errors, "email")}
          label="Zip Code"
          value={zipCode}
          onValueChange={(value: string) => setField("zipCode", value)}
        />
        <MultiselectDropdown
          id="community"
          label="Select Community"
          placeholder="Please choose community"
          options={communityOptions}
          errorMessage={findErrorMessages(errors, "community")}
          value={values.community || []}
          onValueChange={(selected: string[]) =>
            setField("community", selected)
          }
        />
        {values.community?.includes("hispanic") && (
          <MultiselectDropdown
            id="language"
            label={
              <span>
                Language{" "}
                <small className="text-sm text-gray-400">
                  (for Hispanic community)
                </small>
              </span>
            }
            placeholder="Please choose language"
            options={languageOptions}
            errorMessage={findErrorMessages(errors, "language")}
            value={values.language ? [values.language] : []}
            onValueChange={(selected: string[]) =>
              setField("language", selected[0] || "")
            }
            isSingleSelect
          />
        )}
      </div>
      <ConsentComponent />
      <PrimaryButton
        className="mt-8 w-full md:w-fit lg:mt-12 md:mt-[5rem]"
        type="submit"
        form="signUpForm"
        disabled={loading}
        onClick={() => {
          // Track button click
          if (!loading) {
            trackGAEvent("gform_submit_button_click", {
              event_category: "Signup",
              event_label: "Sign Up Form Submit Button Click",
            });
          }
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </PrimaryButton>
    </form>
  );
}

function ConsentComponent() {
  const { values, setField, getFormStatus } = useBoundStore((state) => state);
  const { acknowledged, authorized } = values;
  const { errors } = getFormStatus();
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
        <JHCheckbox
          id="acknowledged"
          errorMessage={findErrorMessages(errors, "acknowledged")}
          isSelected={acknowledged}
          onValueChange={(isSelected: boolean) =>
            setField("acknowledged", isSelected)
          }
        >
          <div>
            I understand and agree that any information that I submit to Jumo
            Health via this website, will be made available to Jumo Health and
            Teva.
          </div>
        </JHCheckbox>
      </div>
      <div className="flex flex-row gap-4 items-start">
        <JHCheckbox
          id="authorized"
          errorMessage={findErrorMessages(errors, "authorized")}
          isSelected={authorized}
          onValueChange={(isSelected: boolean) =>
            setField("authorized", isSelected)
          }
        >
          <div>
            I authorize Teva, its affiliates, and companies working with Teva,
            including Jumo Health, to contact me by email for marketing
            purposes, such as to provide me with information about medical
            research and raise awareness about clinical research studies. I
            understand that I may choose to no longer receive further
            communications from Teva by following the unsubscribe instructions
            on the communication.
          </div>{" "}
        </JHCheckbox>
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

  // Cast to ConsentData to match the actual structure
  const consentData = find(consents, {
    id: country,
  }) as ConsentData | undefined;

  // Use optional chaining to safely access properties
  const id = consentData?.id || "";
  const content = consentData?.content;
  const src = consentData?.src || "";

  if (changing) {
    return (
      <div className="flex flex-wrap justify-center gap-x-4 my-12 text-sm">
        {consents.map((c: ConsentData) => {
          return (
            <button
              key={c.id}
              className="flex flex-row items-center hover:text-teva-green"
              onClick={() => {
                setCountry(c.id);
                setChanging(false);
              }}
            >
              {c.id && countryCodeMap[c.id]
                ? getUnicodeFlagIcon(countryCodeMap[c.id])
                : ""}{" "}
              {c.id}
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
          {id && countryCodeMap[id]
            ? getUnicodeFlagIcon(countryCodeMap[id])
            : ""}{" "}
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
