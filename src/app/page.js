
import Nice from "@/components/nice";

import Hero from "@/components/hero";
import Features from "@/app/features/page";
import Courses from "@/components/courses";
import Testmonial from "@/app/testimonials/page";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="">
      {/* <Landing/> */}
      <Hero/>
      <Features/>
      {/* <Nice/> */}
    <Courses/>
    <Testmonial/>
    <ContactSection/>
      
    </div>
  );
}
