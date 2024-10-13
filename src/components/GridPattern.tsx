import { cn } from "../util/cn";

interface GridPatternProps {
  className?: string;
  size?: number;
}

export const GridPattern = ({ size = 128, ...props }: GridPatternProps) => {
  return (
    <div
      style={{
        backgroundSize: `${size}px ${size}px`,
      }}
      className={cn(
        "inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]",
        props.className
      )}
    ></div>
  );
};
