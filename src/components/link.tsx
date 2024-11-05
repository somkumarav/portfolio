import Link from "next/link";
import { ReactNode } from "react";

export const LinkCTA = (props: { children: ReactNode; href: string }) => {
  return (
    <Link
      href={props.href}
      className='text-foreground underline'
      target='_blank'
    >
      {props.children}
    </Link>
  );
};
