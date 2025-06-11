"use client";

import {cn} from "@/helpers/cn";
import {useRef, forwardRef, useEffect, useMemo, useState, ReactNode} from "react";
import {motion} from "framer-motion";
import {useInput} from "@heroui/react";
import {useBoundStore} from "@/store/provider";
import JHCheckbox from "@/components/Checkbox";

type Option = { label: string; value: string };

type Props = {
    id: string;
    label: ReactNode;
    placeholder: string;
    options: Option[];
    errorMessage?: string;
    value: string[];
    onValueChange: (val: string[]) => void;
    isDisabled?: boolean;
    isSingleSelect?: boolean;
};

const MultiselectDropdown = forwardRef(
    ({id, label, placeholder, options, errorMessage, value, onValueChange, isDisabled, isSingleSelect}: Props, ref: any) => {
        const refs = useBoundStore((state: any) => state.refs);
        const {
            Component,
            domRef,
            description,
            getDescriptionProps,
            getErrorMessageProps,
        } = useInput({id, ref});

        const [isOpen, setIsOpen] = useState(false);
        const [shake, setShake] = useState(false);

        const selectedLabels = useMemo(() => {
            return options
                .filter((opt) => value.includes(opt.value))
                .map((opt) => opt.label)
                .join(", ");
        }, [value, options]);

        useEffect(() => {
            if (errorMessage) {
                setShake(true);
                setTimeout(() => setShake(false), 300);
            }
        }, [errorMessage]);

        const toggleOption = (val: string) => {
            if (isSingleSelect) {
                onValueChange([val]);
                setIsOpen(false);
            } else {
                if (value.includes(val)) {
                    onValueChange(value.filter((v) => v !== val));
                } else {
                    onValueChange([...value, val]);
                }
            }
        };

        const ChevronIcon = ({isOpen}: { isOpen: boolean }) => (
            <motion.svg
                className="ml-2 w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                animate={{rotate: isOpen ? 180 : 0}}
                transition={{duration: 0.25}}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </motion.svg>
        );

        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node)
                ) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);

        return (
            <Component ref={(el: any) => (refs.current[id] = el)}>
                <div ref={dropdownRef}>
                    <label className="text-2xl block leading-9 mb-1" htmlFor={id}>
                        {label}
                    </label>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => domRef.current?.focus()}
                        onKeyDown={() => domRef.current?.focus()}
                    >
                        <div className="relative w-full">
                            <div
                                className={cn(
                                    "px-[15px] bg-transparent border-0 ring-white outline-none focus:ring-1 focus:ring-teva-teal w-full h-12 py-2.5 rounded-[2px] ring-1 flex items-center justify-between cursor-pointer",
                                    {"opacity-50 cursor-not-allowed": isDisabled},
                                    {"ring-red-700 focus:ring-ring-red-700": errorMessage}
                                )}
                                onClick={() => !isDisabled && setIsOpen((prev) => !prev)}
                            >
              <span className={cn("truncate", {"text-gray-400": value.length === 0})}>
                {value.length > 0 ? selectedLabels : placeholder}
              </span>
                                <ChevronIcon isOpen={isOpen}/>
                            </div>

                            {isOpen && (
                                <div
                                    className="absolute mt-2 w-full bg-black p-2.5 rounded-[2px] shadow-lg z-50 max-h-60 overflow-auto border">
                                    {options.map((opt) => (
                                        <JHCheckbox
                                            key={opt.value}
                                            id={`${id}-${opt.value}`}
                                            isSelected={value.includes(opt.value)}
                                            onValueChange={() => toggleOption(opt.value)}
                                            classNames={{
                                                label: "translate-y-[-2px]",
                                                base: "max-w-full w-full",
                                                icon: "",
                                            }}
                                        >
                                            {opt.label}
                                        </JHCheckbox>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {description && <div {...getDescriptionProps()}>{description}</div>}
                    {errorMessage && (
                        <motion.div
                            animate={shake ? {x: [0, -6, 6, -6, 6, 0]} : {}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            className="absolute bottom-0.5 text-red-500 right-2 text-xs text-pred sm:text-[13px]"
                            {...(getErrorMessageProps() as any)}
                        >
                            {errorMessage}
                        </motion.div>
                    )}
                </div>
            </Component>
        );
    }
);

MultiselectDropdown.displayName = "MultiselectDropdown";
export default MultiselectDropdown;