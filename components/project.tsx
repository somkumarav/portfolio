import { ReactNode } from "react";
import { GithubLogo } from "./icons/github-logo";
import { WebLogo } from "./icons/web-logo";
import { ProjectExternalLink } from "./project-external-link";

export const Project = (props: {
  title: string;
  children: string | ReactNode;
  tags?: string[];
  websiteLink?: string;
  githubLink?: string;
}) => {
  return (
    <div className='space-y-4 bg-white/5 px-4 py-3 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text-foreground'>{props.title}</p>
        <div className='flex items-center flex-wrap gap-2'>
          {props.websiteLink ? (
            <ProjectExternalLink href={props.websiteLink} logo={<WebLogo />} />
          ) : null}

          {props.githubLink ? (
            <ProjectExternalLink
              href={props.githubLink}
              logo={<GithubLogo />}
            />
          ) : null}
        </div>
      </div>
      <p>{props.children}</p>
      <div className='flex flex-wrap gap-2'>
        {props.tags?.map((item) => (
          <div
            key={item}
            className='px-2 py-1 bg-neutral-700 text-white rounded-md text-sm'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
