import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";



function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="https://cdnuploads.aa.com.tr/uploads/Contents/2021/04/27/thumbs_b_c_81896cb3a3459a72364c7dbe891cfc0a.jpg?v=125209"
        title="İletişim"
        url="/"
      />
      <ContactForm/> 
      <Footer/>
    </>
  );
}

export default Contact;