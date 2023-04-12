import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Service"
        // text="gggggggggggggggggggggggggggggggggg"
        // buttonText="Read more"
        // url="/"
        // btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
