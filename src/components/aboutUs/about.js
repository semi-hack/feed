import React, { useEffect } from 'react'
import '../aboutUs/about.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import imgBg from '../../images/tara.jpg'

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
                    Feed Afrique is an agri tech company, a modern diary farm into the production
                    of milk, feed and fodder, breeding of cattle and production of renewable energy.

                    Our Vision: To be the largest commercial agricultural firm in Africa, to ensure
                    zero Hunger, lessen cost of production to better serve families living under $1
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
            <p>"To be the largest commercial farm ecosystem in Africa meeting food production and creating wealth for africans." </p>
        </div>
         <div className="one">
             <h2 className="Sp">Our Vision</h2>
             <p>"To be the largest commercial farm ecosystem in Africa meeting food production and creating wealth for africans." </p>
         </div>
         <div className="one">
             <h2 className="Sp">Our Values</h2>
             <p>"To be the largest commercial farm ecosystem in Africa meeting food production and creating wealth for africans."</p>
        </div>
        </div>
       
        </div>

    )
}

export default About
