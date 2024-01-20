import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1546000/1546981.jpg"
        title="Hakkımızda"
        url="/"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;