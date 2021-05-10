import React from 'react'
import imgBg from '../../images/FAlogo.jpg'
import '../aboutUs/about.css'
// import { Link } from "react-router-dom";
import { FooterContainer, FooterWrap,  FooterLinksContainer, FooterLinkWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, 
SocialMedia, SocialMediaWrapper, SocialIcons, SocialLogo, websiteRights } from './footerElements';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
    return (
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItem>
                                <FooterLinkTitle to='/about'>About Us</FooterLinkTitle>
                                    <FooterLink>Services</FooterLink>
                                    <FooterLink to='#/'>Terms of Service</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to='/about'>Learn More</FooterLink>
                                    <FooterLink to='#/'>Privacy Policy</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                {/* <FooterLinkTitle>Social Media</FooterLinkTitle> */}
                                <FooterLink>fkoyeleke@feedafrique.com</FooterLink>
                                <p>+234 9058025285</p>
                            </FooterLinkItem>
                        </FooterLinkWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to = '/'>
                        <div className="logo2">
                        <img src={imgBg} alt="" />
                        </div>
                        </SocialLogo>
                        <websiteRights>Feed Afrique (c) 2021 All rights reserved</websiteRights>
                        <SocialIcons>
                            <a href='https://twitter.com/FeedAfrique?s=08'> <TwitterIcon className="fabc mr-4" /> </a>
                            <a href="https://www.instagram.com/feedafrique/"> <InstagramIcon className="fabc mr-4" /> </a>
                            <a href="https://wa.me/+2349058025285"> <WhatsAppIcon className="fabc mr-4" /> </a>
                            <a href='https://www.facebook.com/FeedAfrique1/'> <FacebookIcon className="fabc mr-4" /> </a>
                            <a href='https://www.linkedin.com/mwlite/in/oluwafolakanmi-oyeleke-649a30200'> <LinkedInIcon className="fabc mr-4" /></a>
                        </SocialIcons>
                    </SocialMediaWrapper>                

                    </SocialMedia>                    
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footer
