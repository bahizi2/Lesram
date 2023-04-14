import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Contact"
        // text="gggggggggggggggggggggggggggggggggg"
        // buttonText="Read more"
        // url="/"
        // btnClass="show"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Gallery;