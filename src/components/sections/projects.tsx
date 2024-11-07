import { Project } from "../project";
import { Section } from "../section";

export const ProjectSection = () => {
  return (
    <Section title='Projects'>
      <Project
        title='Cloud photo share'
        tags={["React", "Next.js", "Typescript", "AWS", "CloudFlare R2"]}
        websiteLink='https://www.google.com'
        githubLink='https://github.com/somkumarav/cloud-media-share'
      >
        Ever taken a bunch of amazing photos on your last trip, wedding or
        family gathering? You probably snapped a tone of photos, right? Tired of
        the hassle of emailing huge files or sharing them on social media? Well,
        I got you. Using this easy-to-use app, lets you create beautiful photo
        albums and share them with your loved ones. Just upload your pics, and
        share a special link. Your friends and family can then view, download,
        and even comment on your photos - all without any complicated sign-ups
        or downloads.
      </Project>
    </Section>
  );
};
