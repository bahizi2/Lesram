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
          image="https://lesrams-com.stackstaging.com/img/service.jpg"
          heading="Water quality assessment"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image="https://lesrams-com.stackstaging.com/img/survey.png"
          heading="Land use planning"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image="https://lesrams-com.stackstaging.com/img/gis.png"
          heading="GIS"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image="https://lesrams-com.stackstaging.com/img/ssa.jpg"
          heading="Soil survey & analysis"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
        <TripData
          image="https://lesrams-com.stackstaging.com/img/eia.jpg"
          heading="Environmental impact assessment"
          text="day adds up. Research shows that students who make learning a habit are more likely to retain information and reach their goals. Set time aside to learn and get reminders using your learning event scheduler."
        />
      </div>
    </div>
  );
}

export default Trip;
