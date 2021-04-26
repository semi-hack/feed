import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
 background-color: #fff;
`

export const FooterWrap = styled.div`
 padding: 38px 24px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 max-width: 1100px;
 margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media Screen and (max-width: 820px) {
      padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #444;

  @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;

`

export const FooterLink = styled(Link)`
  color: #444;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
      color: #01bf71;
      transition: 0.3s ease-out
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } 
`

export const SocialLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 10px;
  height: 65px;
  margin-left: 20px;

`

export const websiteRights = styled.p`
  margin-bottom: 18px;
  color: red;
  font-weight: normal;
  font-size: .9rem;
  line-height: 1.5;

`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  color: rgb(126, 167, 30)
  
`