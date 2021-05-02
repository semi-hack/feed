import React, { useEffect } from 'react'
import logo from "../../images/jo.jpg";
import logo2 from "../../images/milk.jpg";
import logo3 from "../../images/energy.jpg";
import logo4 from "../../images/cow.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import './service.css';

const Service = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="Title">
               Services
            </div>
        <div className="section">
            <div className="container">
              <div className="cards">
                  <img src={logo} alt="" />
                  <div className="content">
                  <h5>Cattle Breeding</h5>
                  <p>Inseminating local cattle to improve genetics so they produce
                    higher quantity and better quality of milk.</p>
                  </div>
                 
              </div>
              <div className="cards">
                  <img src={logo2} alt="" />
                  <div className="content">
                  <h5>Milk Production</h5>
                  <p> Boosting local milk production to improve the quality of milk
                     consumed also making it affordable for millions of Nigerians.</p>
                  </div>
              </div>
              <div className="cards">
                  <img src={logo4} alt="" />
                  <div className="content">
                  <h5>Feed and Fodder Production</h5>
                  <p>Producing feed and fodder for livestock/crop farmers.</p>
                  </div>
              </div>
              <div className="cards">
                  <img src={logo3} alt="" />
                  <div className="content">
                  <h5>Renewable Energy Production</h5>
                  <p>Through the use of a bio-digester we convert our cattle and
                    food waste into energy.</p>
                  </div>        
              </div>


            </div>
        </div>
        </div>
    )
}

export default Service
