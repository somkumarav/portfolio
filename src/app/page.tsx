import { MyInfo } from "../components/my-info";
import { Section } from "../components/section";

export default function Home() {
  return (
    <div className='space-y-12 mt-12'>
      <MyInfo />
      <Section heading='About'>
        <p>
          I&apos;ve spent the last 5 years building software. TypeScript and
          React are my weapons of choice.
        </p>
      </Section>
    </div>
  );
}
