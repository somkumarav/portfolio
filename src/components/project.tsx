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
    <div className='space-y-2'>
      <p className='text-foreground'>{props.title}</p>
      <p>{props.children}</p>
      <div className='flex flex-wrap gap-2'>
        {props.tags?.map((item) => (
          <div
            key={item}
            className='px-2 py-1 bg-neutral-800 text-white rounded-md text-sm'
          >
            {item}
          </div>
        ))}
      </div>
      <div className='flex items-center flex-wrap gap-2'>
        {props.websiteLink ? (
          <ProjectExternalLink
            href={props.websiteLink}
            logo={<WebLogo />}
            label='website'
          />
        ) : null}

        {props.githubLink ? (
          <ProjectExternalLink
            href={props.githubLink}
            logo={<GithubLogo />}
            label='source'
          />
        ) : null}
      </div>
    </div>
  );
};
