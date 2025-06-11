import Image from "next/image";
import TevaLogo from "/public/assets/teva-logo.webp";
import Link from "next/link";
import { paths } from "@/constants/paths";
import Logo from "./Logo";

type Link = {
  type: string;
  links: {
    label: string;
    href: string;
  }[];
};

const links: Link[] = [
  {
    type: "Navigation",
    links: [
      {
        label: "Frequently Asked Questions (FAQs)",
        href: "/",
      },
      {
        label: "See If I Qualify",
        href: "/",
      },
    ],
  },
  {
    type: "Legal",
    links: [
      {
        label: "Terms of Use",
        href: paths.termsOfUse,
      },
      {
        label: "Privacy Policy",
        href: paths.privacyPolicy,
      },
    ],
  },
  {
    type: "Contact",
    links: [
      {
        label: "TBD",
        href: "/",
      },
      {
        label: "TBD",
        href: "/",
      },
    ],
  },
];

const legals = [
  {
    label: "Cookies Policy",
    href: paths.cookiePolicy,
  },
  {
    label: "Terms of Use",
    href: paths.termsOfUse,
  },
  {
    label: "Privacy Policy",
    href: paths.privacyPolicy,
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="px-6 py-8 xl:p-10 flex flex-col lg:flex-row justify-between items-start bg-white">
        {/* <Image
          src={TevaLogo}
          alt="Teva"
          className="h-[84px] w-[150px] -ml-4"
          priority
        /> */}
        {/* <ul className="flex flex-col md:flex-row gap-5 md:gap-20 2xl:gap-[8.75rem] text-body-text">
          {links.map((section) => (
            <li key={section.type} className="leading-7">
              <span className="font-semibold">{section.type}</span>
              <ul>
                {section.links.map((sectionItem, index) => (
                  <li key={String(index + 1)}>
                    <Link
                      target="_blank"
                      href={sectionItem.href}
                      className="hover:underline cursor-pointer"
                    >
                      {sectionItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="py-8 xl:py-10 flex items-center left-0 justify-between pr-6 xl:pr-20 leading-6 bg-teva-blue text-white">
        <Logo />
        <div className="flex flex-row gap-8">
          {legals.map((link: any) => {
            const { href, label } = link;
            return (
              <a
                key={label}
                className="hover:underline"
                href={href}
                target="_blank"
              >
                {label}
              </a>
            );
          })}
          <span className="text-white">
            &#169; 2025 Teva. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
