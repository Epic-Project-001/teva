import { paths } from "@/constants/paths";
import Link from "next/link";
import React from "react";

export default function HelloBar() {
  return (
    <div className="text-xl sm:text-2xl leading-9 fixed z-[10] top-0 w-full bg-teva-blue text-white h-[4rem] sm:h-[6.813rem] px-6 lg:px-40 flex flex-col justify-center items-center">
      <div className="flex w-full items-center justify-between max-w-[1265px] ">
        <span>Click button for sale </span>
        <Link href={paths.stayConnected} className="font-bold hover:underline">
          Stay connected
        </Link>
      </div>
    </div>
  );
}
