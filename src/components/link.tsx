import Link from "next/link";
import { ReactNode } from "react";

export const LinkCTA = (props: { children: ReactNode; href: string }) => {
  return (
    <Link
      href={props.href}
      className='text-foreground underline hover:text-sky-300 transition-colors'
      target='_blank'
    >
      {props.children}
    </Link>
  );
};
