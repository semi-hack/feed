import styled from 'styled-components'
import ImgBg from '../../images/milk.jpg';


export const Rcontainer = styled.section`
  width: 100%;
  padding: 80px 0;
  
  @media screen and (max-width: 768px) {
      height: 1100px;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  }

`

export const Rwrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`

export const Rback = styled.div`
  width: 100%;
  max-width: 50%;
  height: 500px;
  background: url(${ImgBg}) no-repeat center/cover;
  margin-left: 50px;
`

export const Rinfo = styled.div`
  width: 100%;
  max-width: 50%;
  margin-right: 50px;
  padding: 0 26px;
`

export const Heading = styled.h2`
  font-size: 32px;

`

export const Subtitile = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin: 20px 0;
`