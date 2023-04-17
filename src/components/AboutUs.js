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
      <p>
        Competent in water quality analysis, soil analysis, GIS, surveying,
        environment and agricultural research.
      </p>
      <AboutUsData
        className="first-des"
        heading="OUR MISSION"
        text="Learning a little each day adds up. Research shows that students who
          make learning a habit are more likely to retain information and
          reach their goals. Set time aside to learn and get reminders using
          your learning event scheduler."
        heading2="OUR VISION"
        text2="Our vision is to be the leading regional consultancy in agriculture and environment management, with a mission of contributing to agricultural/forestry development and environmental sustainability through research and the provision of high-quality consultancy services."
        img1={Mountain1}
        img2={Mountain2}
        // buttonText="Read more"
        // url="./about"
        // btnClass="btn-sec"
      />
      <p className="text-title">
        We are a multi-disciplinary consortium consultant entity providing
        solutions to individuals, organizations and government departments. Our
        services are tailored to local conditions based on awareness of local
        culture and politics to yield feasible solutions for improved livelihood
        and food security.
      </p>
      <AboutUsData
        className="first-des-reverse"
        heading="Quality"
        text="Providing quality work to our clients following a multi-disciplinary approach"
        heading2="Customer focus"
        text2="Providing high quality and efficient consultancy services of international standards to Organizations, Governments and Private Institutions in East Afric"
        heading3="Professionalism"
        text3="Providing high quality consultancy services to clients using modern methods, technologies and models."
        img1="https://lesrams-com.stackstaging.com/img/report.jpg"
        img2="https://lesrams-com.stackstaging.com/img/research.jpg"
        // buttonText="Read more"
        // url="./about"
        // btnClass="btn-sec"
      />
      <h1 className="team-title">Meet Our Team</h1>
      <div className="container">
        <div class="main-container">
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img
                  src="https://lesrams-com.stackstaging.com/img/Prof%20Majaliwa.jpg"
                  alt="no-image"
                />
              </div>
            </div>
            <div class="header">
              <div class="title">Majaliwa Mwanjalolo</div>
            </div>
            <div class="body">
              <span>Chief Executive</span>
              <br />
              <span>Director</span>
            </div>
          </div>
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img
                  src="https://lesrams-com.stackstaging.com/img/Charles-Luswata.jpg"
                  alt="no-image"
                />
              </div>
            </div>
            <div class="header">
              <div class="title">Charles Luswata</div>
            </div>
            <div class="body">
              <span>Chief lab</span>
              <br />
              <span>Technician</span>
            </div>
          </div>
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img src="" alt="no-image" />
              </div>
            </div>
            <div class="header">
              <div class="title">Josephine Nampijja</div>
            </div>
            <div class="body">
              <span>GIS Specialist</span>
            </div>
          </div>
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img
                  src="https://lesrams-com.stackstaging.com/img/Esther%20Sebuliba.jpg"
                  alt="no-image"
                />
              </div>
            </div>
            <div class="header">
              <div class="title">Esther Sebuliba Senkosi</div>
            </div>
            <div class="body">
              <span>Senior</span>
              <br />
              <span>Administrative Officer</span>
            </div>
          </div>
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img src="" alt="no-image" />
              </div>
            </div>
            <div class="header">
              <div class="title">Abiba Alice</div>
            </div>
            <div class="body">
              <span>Executive Secretary</span>
            </div>
          </div>
          <div class="post">
            <div class="thumbnail">
              <div class="img-container">
                <img src="" alt="no-image" />
              </div>
            </div>
            <div class="header">
              <div class="title">Gonzaga Kayuki</div>
            </div>
            <div class="body">
              <span>Lab Technician</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
