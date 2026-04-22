import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "../lib/cn";

export const LinkCTA = ({
  removeUnderLine = false,
  ...props
}: {
  children: ReactNode;
  href: string;
  removeUnderLine?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={props.href}
      className={cn(
        "text-foreground hover:text-sky-300 transition-colors",
        !removeUnderLine ? "underline" : ""
      )}
      target='_blank'
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};
