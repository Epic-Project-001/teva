import SignUpForm from "@/components/sign-up/SignUpForm";
import { metadataImageUrl } from "@/constants/metadataImageUrl";
import { Metadata } from "next";

const title = "Sign up for our email newsletters.";
const description =
  "Sign up for our email newsletters to learn more about medical research and raise awareness about research studies in your community.";

export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    type: "article",
    title,
    description,
    url: "",
    images: [
      {
        url: metadataImageUrl,
        alt: title,
      
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: metadataImageUrl,
  },
};

// async function getUserCountry() {
//   const country_code = fetch("https://ipinfo.io/json?token=<YOUR_API_TOKEN>")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(`Country: ${data.country}`);
//     })
//     .catch((error) => console.error("Error:", error));
// }

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
      <p className="mt-16 text-md leading-9 text-center text-balance">
        Any information you submit is secured with AES-256 encryption
      </p>
    </div>
  );
}
