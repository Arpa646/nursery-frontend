import { HeroSection } from "@/components/HeroSection/HeroSection";
import TopPlants from "@/components/TopPlants/TopPlants";

import Image from "@/pages/Image/Image";
import Section from "@/pages/section/Section";

export default function Home() {

  return (
    <div className="">
      <HeroSection />
      {/* <Category/> */}
      <TopPlants />

      <Section />
      <Image />
    </div>
  );
}
