"use client";

import posthog from "posthog-js";
import { GithubLogo } from "./icons/github-logo";
import { LinkedinLogo } from "./icons/linkedin-logo";
import { XLogo } from "./icons/x-logo";
import { LinkCTA } from "./link";

export const Socials = () => {
  return (
    <div className='flex items-center space-x-4 mt-1'>
      <LinkCTA
        href='https://github.com/somkumarav'
        onClick={() => posthog.capture("social_link_clicked", { platform: "github" })}
      >
        <GithubLogo className='h-5 w-5' />
      </LinkCTA>
      <LinkCTA
        href='https://x.com/somkumar_va'
        onClick={() => posthog.capture("social_link_clicked", { platform: "x" })}
      >
        <XLogo className='h-5 w-5' />
      </LinkCTA>
      <LinkCTA
        href='https://www.linkedin.com/in/somkumarva/'
        onClick={() => posthog.capture("social_link_clicked", { platform: "linkedin" })}
      >
        <LinkedinLogo className='h-5 w-5' />
      </LinkCTA>
    </div>
  );
};
