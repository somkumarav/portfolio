import { Section } from "../section";
import { Socials } from "../socials";

export const AboutSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section title='About'>
      <p>
        Hi I&apos;am Somu, I&apos;ve spent the last {currentYear - 2019} years
        building software. TypeScript and React are my weapons of choice.
        Cooking and driving are my hobbies.
      </p>

      <Socials />
    </Section>
  );
};
