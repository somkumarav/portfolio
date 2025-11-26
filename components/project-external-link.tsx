import { ReactNode } from "react";
import { LinkCTA } from "./link";
import { RightArrow } from "./icons/right-arrow";

export const ProjectExternalLink = (props: {
  href: string;
  logo: ReactNode;
  label?: string;
}) => {
  return (
    <LinkCTA href={props.href} removeUnderLine>
      <div className='flex items-center space-x-2 text-sm bg-white/10 border border-neutral-700 px-2 py-1 w-fit rounded-full transition-all hover:bg-white/15'>
        {props.logo}
        {!props.label ? null : (
          <div className='flex items-center'>
            <p>{props.label}</p> <RightArrow />
          </div>
        )}
      </div>
    </LinkCTA>
  );
};
