import { ReactNode, useState } from "react";
import { cn } from "../util/cn";
import { FiClipboard, FiCheck } from "react-icons/fi";

interface InputProps {
  label: string;
  smallLabel: string;
  value: number;
  size?: "sm" | "lg";
  onChange: (value: number) => void;
  footer?: ReactNode;
  allowCopy?: boolean;
}

export const Input = ({ size = "lg", ...props }: InputProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    if (!props.value) return;

    navigator.clipboard.writeText(props.value.toString());
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center w-full",
        size === "lg" && "gap-2",
        size === "sm" && "gap-1"
      )}
    >
      <div
        className={cn(
          "font-medium text-white",
          size === "lg" && "text-xl",
          size === "sm" && "text-sm"
        )}
      >
        {props.label}
      </div>
      <div className="relative w-full">
        <input
          className={cn(
            "bg-accent-3 ring-1 ring-inset ring-accent-1 focus:ring-2 focus:ring-inset focus:ring-accent-2",
            "shadow-md rounded-lg outline-none transition-all w-full",
            size === "lg" && "text-2xl py-3 pl-3 pr-14",
            size === "sm" && "text-base py-2 pl-2 pr-8",
            props.allowCopy && "pr-24"
          )}
          type="number"
          inputMode="numeric"
          value={props.value}
          onChange={(e) => props.onChange(e.target.valueAsNumber)}
        />
        <div
          className={cn(
            "absolute top-[50%] translate-y-[-50%] text-accent-2 flex flex-row-reverse items-center gap-2",
            size === "lg" && "right-3 text-lg",
            size === "sm" && "right-2"
          )}
        >
          {props.allowCopy && (
            <button
              type="button"
              disabled={!props.value}
              onClick={handleCopy}
              className={cn(
                "flex items-center justify-center w-8 h-8 transition-all rounded-lg shadow-lg ring-1 ring-accent-2  hover:ring-2",
                !props.value &&
                  "pointer-events-none opacity-40 cursor-not-allowed"
              )}
            >
              {hasCopied ? <FiCheck size={16} /> : <FiClipboard size={16} />}
            </button>
          )}
          {props.smallLabel}
        </div>
      </div>
      {props.footer && <div>{props.footer}</div>}
    </div>
  );
};
