import { LinkCTA } from "../link";
import { Section } from "../section";

export const ConnectSection = () => {
  return (
    <Section title='Connect'>
      <p>
        Follow me on <LinkCTA href='https://x.com/somkumar_va'>X</LinkCTA>
        ,view my code and open-source projects on{" "}
        <LinkCTA href='https://github.com/somkumarav'>Github</LinkCTA>, or email
        me directly{" "}
        <LinkCTA href='mailto:somkumarav@gmail.com'>
          somkumarav@gmail.com.
        </LinkCTA>
      </p>
    </Section>
  );
};
