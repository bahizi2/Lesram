import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import SimpleReactLightbox from "simple-react-lightbox";
import Gallery from "../components/Gallery"
function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Gallery"
        // text="gggggggggggggggggggggggggggggggggg"
        // buttonText="Read more"
        // url="/"
        // btnClass="show"
      />
      <SimpleReactLightbox>
      <Gallery/>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
}

export default Gallery;
