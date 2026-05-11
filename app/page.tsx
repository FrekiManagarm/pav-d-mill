import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AwardsBand from "@/components/AwardsBand";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Wellness from "@/components/Wellness";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AwardsBand />
        <About />
        <Rooms />
        <Dining />
        <Wellness />
        <Events />
        <Testimonials />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
