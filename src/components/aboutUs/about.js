import React, { useEffect } from "react";
import "../aboutUs/about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import imgBg from "../../images/ceo.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="about-us">
        <div class="row">
          <div data-aos="fade-down" className="image-section">
            <h1>About Us</h1>
            <p className="text">
              Feed Afrique is a sustainable agri tech startup, into carbon
              neutral dairy farming, and renewable energy production. Our
              Vision: To be the largest commercial agricultural firm in Africa,
              to ensure zero Hunger by lessening the cost of food products to
              better serve families living on $2 -$5 a day.
            </p>
          </div>
          {/* <div className="image-section">
          <img src={imgBg} alt="" />
        </div> */}
        </div>
      </div>

      <div data-aos="zoom-in" className="section2">
        <div className="one">
          <h2 className="Sp">Our Mission</h2>
          <p>
            "To reduce carbon emissions on dairy farms and provide an alternate
            source of energy."{" "}
          </p>
        </div>
        <div className="one">
          <h2 className="Sp">Our Vision</h2>
          <p>
            "To be the largest commercial agricultural firm in Africa, to ensure
            zero Hunger by lessening the cost of food products to better serve
            families living on $2 -$5 a day."{" "}
          </p>
        </div>
        <div className="one">
          <h2 className="Sp">Our Values</h2>
          <p>
            "Integrity, Excellence, Drive to achieve the best in all we do."
          </p>
        </div>
      </div>

      {/* <div className="team">
        <div className="team-container">
          <h1 className="text">Meet Our Team</h1>
        </div>
        {/* first user starts */}
        {/* <div className="row">
          <div className="profile-card">
              <img src={imgBg} alt=""/>
            <h4>Oyeleke Oluwafolakanmi</h4>
            <h5>Chief Executive Officer</h5>
          </div> */}
          {/** */}
          {/* <div className="profile-card">
            <div>
              <img src="../../images/coo.jpg" alt=""></img>
            </div>
            <h4>Oyeleke Adewale</h4>
            <h5>Chief Operations Officer</h5>
          </div>

          <div className="profile-card">
            <div>
              <img src="../../images/cfo.jpg" alt=""></img>
            </div>
            <h4>Akinlo Olayinka</h4>
            <h5>Chief Financial Officer</h5>
          </div>

          <div className="profile-card">
            <div>
            <img src="../../images/law.jpg" alt=""></img>
            </div>
            <h4>Olumuyiwa Abolude</h4>
            <h5>Head of Legal</h5>
          </div>

          <div className="profile-card">
          <div>
          <img src="../../images/att1.jpg" alt=""></img>
          </div>
            <h4>Hassan mohammed</h4>
            <h5>Farm Attendant</h5>
          </div>

          <div className="profile-card">
          <div>
          <img src="../../images/att2.jpg" alt=""></img>
          </div>
            <h4>Abubakar Sulieman</h4>
            <h5>Farm Attendant</h5>
          </div>
        </div>
      </div> */}
    </div> 
  );
};

export default About;
