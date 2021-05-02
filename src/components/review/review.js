import React, { useState, useEffect } from "react";
import {
  Heading,
  Heading1,
  Rback,
  Rback2,
  Rback3,
  Rcontainer,
  Rinfo,
  Rwrapper,
  Subtitile,
  Subtitile1
} from "./reviewElement";
import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > lastYPos;

      setShouldShowActions(isScrollingDown);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.addEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <Rcontainer>
      <Rwrapper>
        <Rback data-aos="fade-up"></Rback>
        <Rinfo data-aos="fade-down">
          <Heading>Renewable Energy</Heading>
          <Subtitile>
            Due to the power/Energy crisis in Nigeria, through the use of a
            bio-digster we convert our cattle and food waste into energy,
            providing an alternate source of energy for our farm and our local
            community. This in turn also reduces our carbon footprint
          </Subtitile>
        </Rinfo>
      </Rwrapper>
      <Rwrapper>
        <Rinfo data-aos="fade-down">
          <Heading>Dairy Production</Heading>
          <Subtitile>
            Most dairy products consumed in Nigeria are imported and these
            imported products are substandard, by producing milk locally we
            improve the quality and quantity of milk consumed also making it
            affordable for millions of Nigerians
          </Subtitile>
        </Rinfo>
        <Rback2 data-aos="fade-up"></Rback2>
      </Rwrapper>
      <Rwrapper>
        <Rback3></Rback3>
        <Rinfo data-aos="fade-up">
          <Heading1>Feed and Fodder Production</Heading1>
          <Subtitile1>
            Producing feed and fodder for livestock/crop farmers.
          </Subtitile1>
          <Heading1>Cattle Breeding</Heading1>
          <Subtitile1>
            Inseminating local cattle to improve genetics so they produce higher
            quantity and better quality of milk.
          </Subtitile1>
        </Rinfo>
      </Rwrapper>
    </Rcontainer>
  );
};

export default Review;
