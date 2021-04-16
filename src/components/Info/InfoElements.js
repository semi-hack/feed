import styled from 'styled-components'
import ImgBg from '../../images/jo.jpg'

export const InfoContainer = styled.div`
  ${'' /* background: #01bf71; */}
  background-image: url(${ImgBg});
  background-size: cover;
  padding: 50px 0px;
  box-sizing: border-box !important;
  transition: ease all 0.5s;
  display: block

  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  ${'' /* height: 860px; */}
  ${'' /* object-fit: cover; */}
  width: 100%;
  max-width: 1100px;
  margin-right: auto; 
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 

`
export const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
export const ForSpan = styled.h3`
  color: #fff;
  font-size: 40px;
  text-align: center;
`

export const InfoCols = styled.div`
    ${'' /* position: relative; */}
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
export const Subtitle = styled.p`
 max-width: 440px;
 margin-bottom: 35px;
 font-size: 18px;
 line-height: 24px;
 text-align: center;
 color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const forBox = styled.div`
  text-align: center
`

