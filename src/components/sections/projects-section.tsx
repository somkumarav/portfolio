import { Project } from "../project";
import { Section } from "../section";

export type TProject = {
  projectName: string;
  websiteLink?: string;
  githubLink?: string;
  description: string;
  tags?: string[];
};

const projects: TProject[] = [
  {
    projectName: "Cloud photo share",
    websiteLink: "https://cms.somsnation.me",
    githubLink: "https://github.com/somkumarav/cloud-media-share",
    description:
      "Ever taken a bunch of amazing photos on your last trip, wedding or family gathering? You probably snapped a tone of photos, right? Tired of the hassle of emailing huge files or sharing them on social media? Well, I got you. Using this easy-to-use app, lets you create beautiful photo albums and share them with your loved ones. Just upload your pics, and share a special link. Your friends and family can then view, download, and even comment on your photos - all without any complicated sign-ups or downloads.",
    tags: [
      "Next.js",
      "Typescript",
      "AWS",
      "TailwindCSS",
      "Docker",
      "Turborepo",
    ],
  },
  {
    projectName: (
      <FlipDotGrid
        text='Flipdots'
        size={3}
        gap={1}
        activeColor='#eeeeee'
        inactiveColor='#333333'
      />
    ),
    websiteLink: "https://www.npmjs.com/package/flipdots",
    githubLink: "https://github.com/somkumarav/flipdots",
    description:
      "I was scrolling through reels one day and saw a cool oldschool flip-dot display project someone made for Opensauce. I loved the project, so I built an npm package which recreates the same effect for web developers. I have used that package for displaying the clock in the about section.",
    tags: ["React.js", "Typescript", "TailwindCSS", "npm"],
  },
];

export const ProjectSection = () => {
  return (
    <Section title='Projects'>
      <div className='space-y-2'>
      {projects.map((project) => {
        return <Project key={project.projectName} {...project} />;
      })}
      </div>
    </Section>
  );
};
