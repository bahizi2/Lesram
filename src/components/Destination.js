import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>What we do</h1>
      <p>Learning a little each day adds up</p>
      <DestinationData
        className="first-des"
        heading="Our services"
        text="We are a multi-disciplinary consortium consultant entity providing solutions to individuals, organizations and government departments. Our services are tailored to local conditions based on awareness of local culture and politics to yield feasible solutions for improved livelihood and food security."
        img1={Mountain1}
        img2={Mountain2}
        // buttonText="Read more"
        // url="./about"
        // btnClass="btn-sec"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Our services"
        text="Competent in water quality analysis."
        text1="soil analysis"
        text2="GIS"
        text3="surveying"
        text4=" environment and agricultural research."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
