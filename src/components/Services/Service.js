import React, { useEffect } from 'react'
import logo from '../../images/jo.jpg';
import logo2 from '../../images/milk.jpg';
import logo3 from '../../images/energy.jpg'
import logo4 from '../../images/cow.jpg'
import { ServiceContainer, Title, Scontainer, Cards, CardBg, serviceP } from './ServiceElements'
import '../aboutUs/about.css';
import Aos from 'aos';
import "aos/dist/aos.css"

const Service = () => {

    useEffect(()=> {
        Aos.init({ duration: 1000 })

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
                 <h5>Cattle Breeding</h5>
                 <serviceP> Inseminating local cattle to improve genetics
                 so they produce higher quantity and better quality of
                 milk.
                 
                 </serviceP>
                 </div>
                 
             </Cards>
             <Cards>
                 <CardBg src={logo2} />
                 <div className="info">
                 <h5>Milk Production</h5>
                 <serviceP>Boosting local milk production to improve the quality
                 of milk consumed also making it affordable for millions of
                 Nigerians.
                 </serviceP>
                 </div>
             </Cards>
             <Cards>
                 <CardBg src={logo4} />
                 <div className="info">
                 <h5>Feed and Fodder Production</h5>
                 <serviceP> Producing feed and fodder for
                 livestock/crop farmers.
                 
                 </serviceP>
                 </div>
             </Cards>
             <Cards>
                 <CardBg src={logo3} />
                 <div className="info">
                 <h5>Renewable Energy Production</h5>
                 <serviceP> Through the use of a bio-digester waste
                 convert our cattle and food waste into energy.
                 </serviceP>
                 </div>
             </Cards>
         </Scontainer>
            
        </ServiceContainer>
    )
}

export default Service
