import { MyInfo } from "../components/my-info";
import { AboutSection } from "../components/sections/about";
import { ConnectSection } from "../components/sections/connect";

export default function Home() {
  return (
    <div className='space-y-12 mt-12'>
      <MyInfo />
      <AboutSection />
      <ConnectSection />
    </div>
  );
}
