import React, { useEffect } from 'react'
import '../aboutUs/about.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import imgBg from '../../images/moo.jpg'

const About = () => {

    useEffect(()=> {
        Aos.init({ duration: 1500 })

    }, [])
    
    return (
        <div>
        <div className = "about-section">
        <div className = "image-section">
         <img src={imgBg} alt=""/>
        </div>
        <div data-aos="fade-down" className="inner-container">
                <h1>About Us</h1>
                <p className="text">
                    Feed Afrique is a sustainable agri tech startup, into carbon neutral 
                    dairy farming, and renewable energy production.

                    Our Vision: To be the largest commercial agricultural firm in Africa, to ensure
                    zero Hunger by lessening the cost of food products to better serve families living on $2 -$5
                    a day.
                </p>
                {/* <div className="skills">
                <span>Our People</span>
                <span>Our Work</span>
                <span>Our Values</span>
            </div> */}
        </div>
       
        </div>

        <div data-aos="zoom-in" className="section2">
        <div className="one">
            <h2 className="Sp">Our Mission</h2>
            <p>"To reduce carbon emissions on dairy farms and provide an alternate source of energy." </p>
        </div>
         <div className="one">
             <h2 className="Sp">Our Vision</h2>
             <p>"To be the largest commercial agricultural firm in Africa, to ensure
                    zero Hunger by lessening the cost of food products to better serve families living on $2 -$5
                    a day." </p>
         </div>
         <div className="one">
             <h2 className="Sp">Our Values</h2>
             <p>"Integrity, Excellence, Drive to achieve the best in all we do."</p>
        </div>
        </div>
       
        </div>

    )
}

export default About
