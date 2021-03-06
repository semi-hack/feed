import styled from 'styled-components'
import ImgBg from '../../images/wind_turbine.svg';
import ImgBg1 from '../../images/ice_cream.svg'
import ImgBg2 from '../../images/moo.jpg'
import { motion } from 'framer-motion'


export const Rcontainer = styled.section`
  width: 100%;
  padding: 80px 0;
  
  ${'' /* @media screen and (max-width: 768px) {
      height: 1100px;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  } */}

`

export const Rwrapper = styled.div`
  max-width: 100%;
  display: flex;
  ${'' /* flex-wrap: wrap; */}
  align-items: center;
  margin-bottom: 50px;
  

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Rback = styled.div`
  width: 100%;
  max-width: 50%;
  height: 500px;
  background: url(${ImgBg}) no-repeat center/cover;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    max-width: 80%
  }
`

export const Rback2 = styled(motion.div)`
  width: 100%;
  max-width: 50%;
  height: 500px;
  background: url(${ImgBg1}) no-repeat center/cover;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    max-width: 80%
  }
`
export const Rback3 = styled(motion.div)`
  width: 100%;
  max-width: 50%;
  height: 500px;
  background: url(${ImgBg2}) no-repeat center/cover;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    max-width: 80%
  }
`

export const Rinfo = styled(motion.div)`
  width: 100%;
  max-width: 50%;
  margin-right: 40px;
  margin-left: 40px;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    max-width: 100%
  }
  ${'' /* padding: 0 100px; */}
`

export const Heading = styled.h2`
  color: #7EA71E;
  font-size: 32px;

`
export const Heading1 = styled.h2`
  color: #7EA71E;
  font-size: 20px;

`

export const Subtitile = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin: 30px 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const Subtitile1 = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin: 30px 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`