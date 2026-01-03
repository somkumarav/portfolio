import { Section } from "../section";
import { Socials } from "../socials";

export const AboutSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section title='About'>
      <p>
        Hi I&apos;am Somu, I&apos;ve spent the last {currentYear - 2019} years
        crafting software. TypeScript and Next.js are my bread and peanut butter.
        I like to cook and drive when I have some spare time.
      </p>

      <Socials />
    </Section>
  );
};
