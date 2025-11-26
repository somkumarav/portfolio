import { MyInfo } from "../components/my-info";
// import { AboutSection } from "../components/sections/about-section";
import { ConnectSection } from "../components/sections/connect-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { ProjectSection } from "../components/sections/projects";

export default function Home() {
  return (
    <div className='space-y-8 mt-12 mb-2'>
      <MyInfo />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <ProjectSection />
      <ConnectSection />
    </div>
  );
}
