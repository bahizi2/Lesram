import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Welcome to Les Rams</h1>
      <p>Learning a little each day adds up</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Our services"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image={Trip2}
          heading="Our services"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image={Trip3}
          heading="Our services"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
      </div>
    </div>
  );
}

export default Trip;
