"use client";

import { cn } from "@/helpers/cn";
import { forwardRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInput } from "@heroui/react";
import { omit } from "lodash";
import { useBoundStore } from "@/store/provider";

const JHInput = forwardRef((props: any, ref: any) => {
  const refs = useBoundStore((state: any) => state.refs);
  const {
    Component,
    label,
    domRef,
    description,
    errorMessage,
    getInputProps,
    getDescriptionProps,
    getErrorMessageProps,
  } = useInput({
    ...props,
    ref,
  });
  const { id, isDisabled } = props;
  const [shake, setShake] = useState<boolean>(false);
  const labelContent = (
    <label className="text-2xl block leading-9 mb-1" htmlFor={id}>
      {label}
    </label>
  );

  const innerWrapper = useMemo(() => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "px-[15px] bg-transparent border-0 ring-white outline-none focus:ring-1 focus:ring-teva-teal invalid:ring-1 invalid:ring-red-700 w-full h-12 py-2.5 rounded-[2px] ring-1",
            { "opacity-50 cursor-not-allowed": isDisabled },
            { "ring-red-700 focus:ring-ring-red-700": errorMessage }
            // inputClassName
          )}
          {...omit(getInputProps(), ["className", "classNames"])}
          {...omit(props, ["errorMessage", "onValueChange"])}
        />
      </div>
    );
  }, [getInputProps]);

  useEffect(() => {
    if (errorMessage) {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  }, [errorMessage]);

  return (
    <Component ref={(el: any) => (refs.current[id] = el)}>
      {labelContent}
      <div
        tabIndex={0}
        role="button"
        onClick={() => {
          domRef.current?.focus();
        }}
        onKeyDown={() => {
          domRef.current?.focus();
        }}
      >
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && (
        <motion.div
          animate={shake ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-0.5 text-red-500 right-2 text-xs text-pred sm:text-[13px]"
          {...(getErrorMessageProps() as any)}
        >
          {errorMessage}
        </motion.div>
      )}
    </Component>
  );
});

JHInput.displayName = "JHInput";

export default JHInput;
