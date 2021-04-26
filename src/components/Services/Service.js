import React, { useState, useEffect } from 'react'
import logo from '../../images/jo.jpg';
import logo2 from '../../images/cheese.jpg';
import logo3 from '../../images/energy.jpg'
import { ServiceContainer, Title, Scontainer, Cards, CardBg, serviceP } from './ServiceElements'
import '../aboutUs/about.css';
import Aos from 'aos';
import "aos/dist/aos.css"

const Service = () => {

    useEffect(()=> {
        Aos.init({ duration: 1500 })

    }, [])

    return (
        <ServiceContainer>
         <Title>
             <h1>Services</h1>
         </Title>
         <Scontainer data-aos="fade-right">
             <Cards>
                 <CardBg src={logo} />
                 <div className="info">
                 <h5>LIvestock Farming</h5>
                 <serviceP> Management and breeding of domestic
                 Livestock i.e cattle
                 </serviceP>
                 </div>
                 
             </Cards>
             <Cards>
                 <CardBg src={logo2} />
                 <div className="info">
                 <h5>Local Food Production</h5>
                 <serviceP>Local Production of Standard dairy products, milk cheese etc
                 </serviceP>
                 </div>
             </Cards>
             <Cards>
                 <CardBg src={logo3} />
                 <div className="info">
                 <h5>Energy Production</h5>
                 <serviceP> Conversion of farm waste into
                 eco-friendly bio-gas.
                 </serviceP>
                 </div>
             </Cards>
         </Scontainer>
            
        </ServiceContainer>
    )
}

export default Service
