import { Section } from "../section";
import { Socials } from "../socials";

export const AboutSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section title='About'>
      <p>
        I&apos;ve spent the last {currentYear - 2019} years building software.
        TypeScript and React are my weapons of choice.
      </p>

      <Socials />
    </Section>
  );
};
