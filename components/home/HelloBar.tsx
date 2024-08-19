import { paths } from "@/constants/paths";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

export default function HelloBar() {
  return (
    <div className="text-lg sm:text-2xl leading-9 fixed z-[10] top-0 w-full bg-teva-blue text-white h-[5rem] sm:h-[4.813rem] px-6 lg:px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center justify-between max-w-[1265px] ">
        <Link
          href={paths.stayConnected}
          className=" flex gap-1.5 font-bold hover:underline text-base"
        >
          <span className="leading-tight">Stay connected</span> <FiArrowRight />
        </Link>

        <span className="text-base text-center">
          Sign up to learn more about research studies and advance medical
          research for ALL{" "}
        </span>
      </div>
    </div>
  );
}
