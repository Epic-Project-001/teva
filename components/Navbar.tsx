"use client";

import Image from "next/image";
import Link from "next/link";
import TevaLogo from "/public/assets/teva-logo.webp";
import PrimaryLink from "./ui/PrimaryLink";
import { paths } from "@/constants/paths";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex absolute top-0 text-white px-6 xl:px-10 py-10 left-0 w-full items-center justify-between">
      <Link href="/" className="cursor-pointer shrink-0">
        <Image
          src={TevaLogo}
          alt="Teva"
          className="h-[84px] w-[150px] -ml-4 lg:-ml-0"
          priority
        />
      </Link>
      <div className="flex md:gap-9 gap-6 items-center">
        {pathname.includes(paths.faqs) ? (
          <span className="leading-8 hidden sm:block pointer-cursor hover:underline">
            Diversity, equity and inclusion
          </span>
        ) : (
          <Link
            href={paths.faqs}
            className="leading-8 pointer-cursor  hover:underline"
          >
            FAQs
          </Link>
        )}
        <PrimaryLink href="/" type="button" size="sm">
          Sign up
        </PrimaryLink>
      </div>
    </nav>
  );
}
