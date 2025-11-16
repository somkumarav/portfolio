import { GithubLogo } from "./icons/github-logo";
import { LinkedinLogo } from "./icons/linkedin-logo";
import { XLogo } from "./icons/x-logo";
import { LinkCTA } from "./link";

export const Socials = () => {
  return (
    <div className='flex items-center space-x-4 mt-1'>
      <LinkCTA href='https://github.com/somkumarav'>
        <GithubLogo className='h-5 w-5' />
      </LinkCTA>
      <LinkCTA href='https://x.com/somkumar_va'>
        <XLogo className='h-5 w-5' />
      </LinkCTA>
      <LinkCTA href='https://www.linkedin.com/in/somkumarva/'>
        <LinkedinLogo className='h-5 w-5' />
      </LinkCTA>
    </div>
  );
};
