import { MyInfo } from "../components/my-info";
import { ConnectSection } from "../components/sections/connect-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { ProjectSection } from "../components/sections/projects-section";

export default function Home() {
  return (
    <div className='space-y-8 mt-12 mb-2'>
      <MyInfo />
      <ExperienceSection />
      <ProjectSection />
      <ConnectSection />
    </div>
  );
}
