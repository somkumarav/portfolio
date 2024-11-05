import { LinkCTA } from "../components/link";
import { MyInfo } from "../components/my-info";
import { Section } from "../components/section";
import { AboutSection } from "../components/sections/about";

export default function Home() {
  return (
    <div className='space-y-12 mt-12'>
      <MyInfo />
      <AboutSection />

      <Section title='Connect'>
        <p>
          Follow me on <LinkCTA href='https://x.com/somkumar_va'>X</LinkCTA>
          ,view my code and open-source projects on{" "}
          <LinkCTA href='https://github.com/somkumarav'>Github</LinkCTA>, or
          email me directly{" "}
          <LinkCTA href='mailto:somkumarav@gmail.com'>
            somkumarav@gmail.com.
          </LinkCTA>
        </p>
      </Section>
    </div>
  );
}
