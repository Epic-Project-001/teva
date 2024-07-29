"use client";

import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/cn";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-[60px] group cursor-pointer relative overflow-hidden text-white px-[38px] leading-8 flex bg-teva-teal font-bold items-center justify-center whitespace-nowrap transition-all duration-300 disabled:cursor-not-allowed",

  {
    variants: {
      size: {
        md: "h-14",
        sm: "h-[56px]",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface PrimaryLinkProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof buttonVariants> {}

const PrimaryLink = ({
  children,
  className = "",
  href = "",
  size,
  ...props
}: PrimaryLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ className, size }))}
      {...props}
    >
      <span className="absolute inset-y-0 left-0 z-0  w-0  bg-teva-teal brightness-[80%] transition-all duration-[400ms] group-hover:w-full group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </Link>
  );
};

PrimaryLink.displayName = "PrimaryLink";

export default PrimaryLink;
