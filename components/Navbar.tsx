import Image from "next/image";
import Link from "next/link";
import TevaLogo from "/public/assets/teva-logo.webp";
import PrimaryLink from "./ui/PrimaryLink";

export default function Navbar() {
  return (
    <nav className="flex absolute top-0 text-white px-10 py-10 left-0 w-full items-center justify-between">
      <Image
        src={TevaLogo}
        alt="Teva"
        className="h-[84px] w-[150px]"
        priority
      />
      <div className="flex gap-9 items-center">
        <Link href="/" type="button" className="leading-8">
          FAQs
        </Link>
        <PrimaryLink href="/" type="button" size="sm">
          Sign up
        </PrimaryLink>
      </div>
    </nav>
  );
}
