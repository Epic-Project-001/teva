import React from "react";
import TevaLogo from "/public/assets/teva-logo.png";
import Image from "next/image";
import { cn } from "@/helpers/cn";
import Link from "next/link";

export default function Logo({
  isCropped = true,
  className,
}: {
  isCropped?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "rounded-full cursor-pointer shrink-0 flex items-center bg-white w-9rem w-[10rem] xl:w-[12rem]",
        { "-ml-9 justify-end": isCropped },
        { "justify-center": !isCropped },
        className
      )}
    >
      <Image
        src={TevaLogo}
        className="shrink-0 h-[3.5rem] xl:h-[4.5rem] w-[8rem] xl:w-[11.5rem]"
        alt="Teva"
      />
    </Link>
  );
}
