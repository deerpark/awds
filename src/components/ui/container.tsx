import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { CommonProps } from "../../interfaces";

export default function Container({
  children,
  className,
  ...props
}: PropsWithChildren<CommonProps>) {
  const classNames = cn(
    {
      "mx-auto": true,
      container: true,
    },
    className
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

Container.Root = ({
  children,
  className,
  ...props
}: PropsWithChildren<CommonProps>) => {
  const classNames = cn(
    {
      "flex-1": true,
      "flex-centered": true,
    },
    className
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
