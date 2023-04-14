import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import "./AboutUsStyles.css";
import AboutUsData from "./AboutUsData";

function AboutUs() {
  return (
    <div className="destination">
      <h1>What we do</h1>
      <p>Learning a little each day adds up</p>
      <AboutUsData
        className="first-des"
        heading="OUR MISSION"
        text="Learning a little each day adds up. Research shows that students who
          make learning a habit are more likely to retain information and
          reach their goals. Set time aside to learn and get reminders using
          your learning event scheduler."
        heading="OUR MISSION"
        text="Our vision is to be the leading regional consultancy in agriculture and environment management, with a mission of contributing to agricultural/forestry development and environmental sustainability through research and the provision of high-quality consultancy services."
        img1={Mountain1}
        img2={Mountain2}
        // buttonText="Read more"
        // url="./about"
        // btnClass="btn-sec"
      />
    </div>
  );
}

export default AboutUs;
