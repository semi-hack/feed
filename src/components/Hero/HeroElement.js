import styled from 'styled-components'
import ImgBg from '../../images/este.jpg';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: url(${ImgBg});
  ${'' /* background-color: #faecaf; */}
  height: 800px;
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: space-between ;
  display: flex;
  ${'' /* margin: auto; */}
  ${'' /* z-index: 1; */}

  ${'' /* :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),
    linear-gradient(180deg, rgba(0,0,0,0.2), 0%, transparent 100%);
    z-index: 2;
  } */}
`;

export const Container = styled.div`
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: space-between;

`

export const HeroContent = styled.div`
  ${'' /* z-index: 3; */}
  ${'' /* max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center; */}

`

export const HeroContent2 = styled.div`
${'' /* linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), */}
  ${'' /* background: url(${ImgBg}); */}
  ${'' /* z-index: 3; */}
  ${'' /* max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center; */}
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

`

export const HeroBtn = styled.div`
  margin-top: 32px;
  display: flex;
  ${'' /* align-items: center; */}
  flex-direction: column;
  justify-content: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`