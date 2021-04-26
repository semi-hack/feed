import styled from 'styled-components'


export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  
  @media screen and (max-width: 768px) {
      height: 1100px;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  }

`

export const Scontainer = styled.div`
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
  ${'' /* grid-template-column: 1fr 1fr 1fr; */}
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
      grid-template-column: 1fr 1fr;
  }

  @media screen and  (max-width: 768px) {
      grid-template-column: 1fr;
      padding: 0 20px;
  }
`

export const Cards = styled.div`
  display: flex;
  width: 600px;
  object-fit: cover;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  ${'' /* max-height: 340px; */}
  margin-top: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`

export const CardBg = styled.img`
  height: 15vw;
  width: 100%;
  ${'' /* height: 15vw; */}
  object-fit: cover;  
  margin-bottom: 10px;
`
export const Title = styled.div`
  font-size: 2.5rem;
  margin-top: 50px;
  margin-bottom: 25px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;


`

export const cardInfo = styled.div`
  text-align: center;
  ${'' /* padding: 16px;
  padding: 5px; */}
  margin-left: 10px;
  height: 100px;
  ${'' /* font-size: 0.9rem;  */}

`
export const serviceP = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`