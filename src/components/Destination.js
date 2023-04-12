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
        text="Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to retain information and
            reach their goals. Set time aside to learn and get reminders using
            your learning event scheduler."
        img1={Mountain1}
        img2={Mountain2}
        // buttonText="Read more"
        // url="./about"
        // btnClass="btn-sec"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Our services"
        text="Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to retain information and
            reach their goals. Set time aside to learn and get reminders using
            your learning event scheduler."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
