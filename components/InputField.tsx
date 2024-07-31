"use client";

import { FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/helpers/cn";
import { ComponentProps, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InputFieldProps<T extends FieldValues = FieldValues>
  extends ComponentProps<"input"> {
  label?: string;
  id: Path<T>;
  inputClassName?: string;
  containerClassName?: string;
}

const InputField = <T extends FieldValues>({
  label,
  inputClassName = "",
  containerClassName = "",
  id,
  disabled = false,
  placeholder,
  ...props
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();
  const [shake, setShake] = useState<boolean>(false);

  useEffect(() => {
    if (errors?.[id]) {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  }, [errors, id]);

  return (
    <div className={cn("w-full", containerClassName)}>
      <label className="text-2xl block leading-9 mb-1" htmlFor={id}>
        {label}
      </label>
      <div className="relative w-full">
        <input
          disabled={disabled}
          className={cn(
            "px-[15px] bg-transparent border-0 ring-white outline-none focus:ring-1 focus:ring-teva-blue invalid:ring-1 invalid:ring-red-700 w-full h-12 py-2.5 rounded-[2px] ring-1",
            { "opacity-50 cursor-not-allowed": disabled },
            { "ring-red-700 focus:ring-ring-red-700": errors?.[id] },
            inputClassName
          )}
          type={props.type}
          placeholder={placeholder}
          id={id}
          {...register(id)}
          {...props}
        />
        {errors?.[id] && (
          <motion.p
            animate={shake ? { x: [0, -6, 6, -6, 6, 0] } : {}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute bottom-0.5 text-red-500 right-2 text-xs text-pred sm:text-[13px]"
          >
            {String(errors?.[id].message)}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default InputField;
