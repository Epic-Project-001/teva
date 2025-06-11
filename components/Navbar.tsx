"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryLink from "./PrimaryLink";
import { paths } from "@/constants/paths";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex absolute top-[1rem] z-10 text-white pr-6 xl:pr-10 py-10 left-0 w-full items-center justify-between">
      <Logo />
      <div className="flex md:gap-9 gap-6 items-center">
        {pathname.includes(paths.faqs) ? (
          <Link
            href={paths.diversityImportance}
            className="hover:underline cursor-pointer leading-8 hidden sm:block"
          >
            Diversity, equity and inclusion
          </Link>
        ) : (
          <Link
            href={paths.faqs}
            className="leading-8 pointer-cursor hover:underline"
          >
            FAQs
          </Link>
        )}
        <PrimaryLink href={paths.signUp} type="button" size="sm">
          Sign up
        </PrimaryLink>
        
        <div className="relative">
          <button
            className="flex items-center px-3 py-2 text-white rounded hover:bg-gray-800 focus:outline-none focus:ring"
            onClick={toggleDropdown}
          >
            EN US
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg text-black z-50">

              <Link
                href="https://es-us.tevatrialsdiversity.com"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                ES US
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
