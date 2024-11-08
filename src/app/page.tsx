import { MyInfo } from "../components/my-info";
import { AboutSection } from "../components/sections/about";
import { ConnectSection } from "../components/sections/connect";
import { ProjectSection } from "../components/sections/projects";

export default function Home() {
  return (
    <div className='space-y-12 mt-16'>
      <MyInfo />
      <AboutSection />
      <ProjectSection />
      <ConnectSection />
    </div>
  );
}
