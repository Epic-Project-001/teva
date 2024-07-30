"use client";

import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/cn";

const buttonVariants = cva(
  "rounded-[60px] group cursor-pointer relative overflow-hidden text-white px-[38px] leading-8 flex bg-teva-teal font-bold items-center justify-center whitespace-nowrap transition-all duration-300 disabled:cursor-not-allowed",

  {
    variants: {
      size: {
        md: "h-14",
        sm: "h-[2.625rem] xl:h-[56px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface PrimaryButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const PrimaryButton = ({
  children,
  className = "",
  size,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button className={cn(buttonVariants({ className, size }))} {...props}>
      <span className="absolute inset-y-0 left-0 z-0  w-0  bg-teva-teal brightness-[80%] transition-all duration-[400ms] group-hover:w-full group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </button>
  );
};

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
