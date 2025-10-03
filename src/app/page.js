
import Nice from "@/components/nice";

import Hero from "@/components/hero";
import Features from "@/components/features";
import Courses from "@/components/courses";
import Testmonial from "@/components/testmonial";

export default function Home() {
  return (
    <div className="">
      {/* <Landing/> */}
      <Hero/>
      <Features/>
      <Nice/>
    <Courses/>
    <Testmonial/>
      
    </div>
  );
}
