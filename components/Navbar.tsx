"use client";

import Link from "next/link";
import PrimaryLink from "./PrimaryLink";
import { paths } from "@/constants/paths";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex absolute top-[4rem] sm:top-[6.813rem] text-white pr-6 xl:pr-10 py-10 left-0 w-full items-center justify-between">
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
            className="leading-8 pointer-cursor  hover:underline"
          >
            FAQs
          </Link>
        )}
        <PrimaryLink href={paths.signUp} type="button" size="sm">
          Sign up
        </PrimaryLink>
      </div>
    </nav>
  );
}
