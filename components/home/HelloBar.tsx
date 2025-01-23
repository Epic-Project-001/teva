import { paths } from "@/constants/paths";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

export default function HelloBar() {
  return (
    <div className="text-lg sm:text-2xl leading-9 fixed z-[10] top-0 w-full bg-teva-green text-body-text h-[10rem] sm:h-[5.813rem] px-6 lg:px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center justify-between max-w-[1265px] ">
        <Link
          href={paths.signUp}
          className=" flex gap-1.5 font-bold hover:underline text-base"
        >
          <span className="leading-tight">Stay connected</span> <FiArrowRight />
        </Link>

        <span className="text-base text-center">
        Signing up for our newsletter is a great first step to start learning about the importance of diversity in medical research
        and about studies that may be of interest to you or your loved ones.{" "}
        </span>
      </div>
    </div>
  );
}
