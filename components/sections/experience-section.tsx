import { Experience } from "../experience";
import { Section } from "../section";

export type TExperience = {
  id: number;
  companyName: string;
  role: string;
  fromDate: Date;
  toDate: Date | "PRESENT";
  location: string;
  websiteLink: string;
  description: string;
};

const experiences: TExperience[] = [
  {
    id: 1,
    companyName: "TutorComp",
    role: "Software Developer",
    fromDate: new Date(2023, 8, 0),
    toDate: new Date(2024, 2, 0),
    location: "Kochi, India",
    websiteLink: "https://www.tutorcomp.com",
    description: `
- Developed a scalable notification system for 10,000+ users across different timezones to help users notify about academic and credit balance details. increasing by 20% increase in user engagement.
- Developed Mobile application using React Native for both IOS and Android, In a team of 2 developers and a designer.
- Reduced loading time by 10% by engineering robust Web servers using Fastify and node.js leading to a better user experience.
          `,
  },
  {
    id: 2,
    companyName: "ClubTravalet",
    role: "Software Developer",
    fromDate: new Date(2024, 2, 0),
    toDate: new Date(2024, 10, 0),
    location: "Kochi, India",
    websiteLink: "https://clubtravalet.com",
    description: `
- Implemented payment using Razorpay resulting in a seamless payment user experience reducing manual labor by 80% and achieving more than 2500 transactions weekly.
- Engineered and deployed modular components and widgets with core functionalities including booking and payments systems using new technologies like Razorpay, achieving a streamlined user experience that processed over 1,500 transactions weekly while ensuring compliance with role-based authentication protocols.
- Designed and Developed flight booking portal implementing live flight listing and booking flight tickets for customers with the help of 3rd party APIs like Amadeus.
    `,
  },
];

export const ExperienceSection = () => {
  return (
    <Section title='Experience'>
      <div className='space-y-2'>
        {experiences
          .slice(0)
          .reverse()
          .map((experience) => {
            return <Experience key={experience.id} {...experience} />;
          })}
      </div>
    </Section>
  );
};
