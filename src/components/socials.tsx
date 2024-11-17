import { GithubLogo } from "./icons/github-logo";
import { LinkedinLogo } from "./icons/linkedin-logo";
import { XLogo } from "./icons/x-logo";
import { LinkCTA } from "./link";

export const Socials = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p>Find me on</p>
      <LinkCTA href='https://github.com/somkumarav'>
        <GithubLogo />
      </LinkCTA>
      <LinkCTA href='https://x.com/somkumar_va'>
        <XLogo />
      </LinkCTA>
      <LinkCTA href='https://www.linkedin.com/in/somkumarva/'>
        <LinkedinLogo />
      </LinkCTA>
    </div>
  );
};
