import React, { useState } from 'react';
import { Button } from '../Button';
import { HeroContainer, Container, HeroContent, HeroH1, HeroP, HeroBtn, ArrowForward, ArrowRight } from './HeroElement';
// import imgBg from '../../images/tara.jpg';

function Hero() {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
         <Container>
         <HeroContent>
                 <HeroH1> Feed Afrique </HeroH1>
                 <HeroP>
                    A sustainable agritech startup into carbon neutral dairy farming and renewable
                    energy production.
                 </HeroP>
                 <HeroBtn>
                     {/* <Button to="" onMouseEnter={onHover} onMouseLeave={onHover}
                     primary='true'
                     dark='true'
                     >
                         Learn More {hover ? <ArrowForward /> : <ArrowRight /> }
                     </Button> */}
                 </HeroBtn>
         </HeroContent>
        </Container>
        </HeroContainer>
    )
}

export default Hero;