import React from 'react'
import imgBg from '../../images/FAlogo.jpeg'
import '../aboutUs/about.css'
// import { Link } from "react-router-dom";
import { FooterContainer, FooterWrap,  FooterLinksContainer, FooterLinkWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, 
SocialMedia, SocialMediaWrapper, SocialIcons, SocialLogo, websiteRights } from './footerElements';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Footer = () => {
    return (
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItem>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink>Products</FooterLink>
                                    <FooterLink>Investors</FooterLink>
                                    <FooterLink>Terms of Service</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink>Learn More</FooterLink>
                                    <FooterLink>Investors</FooterLink>
                                    <FooterLink>Privacy Policy</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                {/* <FooterLinkTitle>Social Media</FooterLinkTitle> */}
                                <FooterLink>info@feedAfrique.com</FooterLink>
                                <p>+234 8095467789</p>
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
                            <a href> <WhatsAppIcon className="fabc mr-4" /> </a>
                            <a href='https://www.facebook.com/FeedAfrique1/'> <FacebookIcon className="fabc mr-4" /> </a>
                        </SocialIcons>
                    </SocialMediaWrapper>                

                    </SocialMedia>                    
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footer
