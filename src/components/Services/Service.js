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
                 <serviceP> We produce healthy and organic meals
                     that are affordable and seasonal
                 </serviceP>
                 </div>
                 
             </Cards>
             <Cards>
                 <CardBg src={logo2} />
                 <div className="info">
                 <serviceP>We produce healthy and organic dairy products
                     that are affordable and seasonal.</serviceP>
                 </div>
             </Cards>
             <Cards>
                 <CardBg src={logo3} />
                 <div className="info">
                 <serviceP> We provide alternative source of energy
                 by converting cow waste to energy
                 </serviceP>
                 </div>
             </Cards>
         </Scontainer>
            
        </ServiceContainer>
    )
}

export default Service
