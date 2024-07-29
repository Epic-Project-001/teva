import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function OurGoal() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #00A03B 15.5%, #AFCB37 100%)",
      }}
      className="py-[5.125rem] xl:py-[3.125rem] text-white px-10"
    >
      <p className="text-2xl leading-9 max-w-[75rem] mx-auto text-center text-pretty">
        Our goal at Teva is to ensure that people from all backgrounds and walks
        of life have access to our research studies.
      </p>
      <Link
        href="/"
        className="mt-[1.875rem] w-fit mx-auto font-bold flex justify-center items-center gap-1.5 hover:underline"
      >
        <span className="leading-tight">
          Learn more about research studies.
        </span>
        <FiArrowRight />
      </Link>
    </div>
  );
}
