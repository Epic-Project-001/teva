import Image from "next/image";
import TevaLogo from "/public/assets/teva-logo.webp";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

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
        label: "Extensive-Stage Small Cell Lung Cancer",
        href: "/",
      },
      {
        label: "Limited-Stage Small Cell Lung Cancer",
        href: "/",
      },
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
        href: "/",
      },
      {
        label: "Privacy Policy",
        href: "/",
      },
    ],
  },
  {
    type: "Contact",
    links: [
      {
        label: "ES-SCLC@henlius.com",
        href: "/",
      },
      {
        label: "LS-SCLC@henlius.com",
        href: "/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-teva-blue">
      <div className="p-20 flex justify-between items-start bg-white">
        <Image
          src={TevaLogo}
          alt="Teva"
          className="h-[84px] w-[150px]"
          priority
        />
        <ul className="flex gap-[8.75rem] text-body-text">
          {links.map((section) => (
            <li key={section.type} className="leading-7">
              {section.type}
              <ul>
                {section.links.map((sectionItem) => (
                  <li key={sectionItem.label}>
                    <Link href={sectionItem.href} className="hover:underline">
                      {sectionItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-10 flex items-center justify-between px-20 leading-6 bg-teva-blue text-white">
        <span>©️ 2024 Teva. All rights reserved.</span>
        <Link
          href="/"
          className="size-6 bg-white text-teva-blue grid place-content-center rounded-sm"
        >
          <FaLinkedinIn size={18} />
        </Link>
      </div>
    </footer>
  );
}
