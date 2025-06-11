import { Checkbox } from "@heroui/react";
import { omit } from "lodash";
import { useBoundStore } from "@/store/provider";

export default function JHCheckbox(props: any) {
    const refs = useBoundStore((state: any) => state.refs);
    const { children, errorMessage, className, classNames = {} } = props;

    const combinedClassNames = {
        base: `jh-checkbox items-start ${classNames.base || ""}`,
        icon: `${classNames.icon || ""}`,
        label: `translate-y-[-5px] text-white ${classNames.label || ""}`,
    };

    return (
        <div
            className={`flex flex-col rounded-[2px] p-2 ${
                errorMessage ? "border border-danger" : ""
            } ${className || ""}`}
            ref={(el: any) => (refs.current[props.id] = el)}
        >
            <Checkbox
                classNames={combinedClassNames}
                radius="none"
                size="sm"
                {...omit(props, ["children", "errorMessage", "classNames", "className"])}
            >
                {children}
            </Checkbox>
            {errorMessage && (
                <div className="text-danger text-tiny">{errorMessage}</div>
            )}
        </div>
    );
}