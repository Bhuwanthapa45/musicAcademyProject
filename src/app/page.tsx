import Featured from "./components/featured";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Instructors from "./components/instructors";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import UpcommingWebinars from "./components/UpcommingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    

    <main className="min-h-screen bg-black/[0.96] antialiased bg-green-white/[0.2]">
      
      <Herosection/>
      <Featured/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcommingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
