import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { CommonProps, StyleOptionProps } from "../../interfaces";

export default function Box({
  children,
  className,
  border,
  rounded,
  padding,
  shadow,
  ...props
}: PropsWithChildren<StyleOptionProps<CommonProps>>) {
  const classnames = cn(
    {
      "rounded-md": rounded,
      "border-px": border,
      shadow: shadow,
      "p-5": padding,
      "group-hover:opacity-75": true,
    },
    {
      "bg-background-primary": true,
      "border-border-secondary": border,
    },
    className
  );
  return (
    <div className={classnames} {...props}>
      {children}
    </div>
  );
}
