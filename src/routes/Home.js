import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero"
        heroimg="https://cdn.gokonya.com/other/meram-cayi-degirmen.jpg"
        title="Bizim Meram İçin Çalışıyoruz"
        btnclass="show"
        url="/"
        buttontext="Tesisleri Keşfet"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;