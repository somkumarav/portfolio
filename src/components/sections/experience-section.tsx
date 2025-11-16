import { Experience } from "../experience";
import { Section } from "../section";

export const ExperienceSection = () => {
  return (
    <Section title='Experience'>
      <div className='space-y-2'>
        <Experience
          title='Club Travalet'
          websiteLink='https://clubtravalet.com'
          fromDate={new Date(2024, 2, 0)}
          toDate={new Date(2024, 10, 0)}
        ></Experience>
        <Experience
          title='Tutorcomp'
          websiteLink='https://www.tutorcomp.com'
          fromDate={new Date(2023, 8, 0)}
          toDate={new Date(2024, 2, 0)}
        ></Experience>
      </div>
    </Section>
  );
};
