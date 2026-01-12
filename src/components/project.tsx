import { GithubLogo } from "./icons/github-logo";
import { WebLogo } from "./icons/web-logo";
import { ProjectExternalLink } from "./project-external-link";
import { Markdown } from "./markdown";
import { TProject } from "./sections/projects-section";
import { Tag } from "./tag";

export const Project = (props: TProject) => {
  return (
    <div className='space-y-4 bg-white/5 px-4 py-3 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text-foreground'>{props.projectName}</p>
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
      <Markdown>{props.description.trim()}</Markdown>
      <div className='flex flex-wrap gap-2'>
        {props.tags?.map((item) => (
          <Tag key={item} item={item} />
        ))}
      </div>
    </div>
  );
};
