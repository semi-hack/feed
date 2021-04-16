import React from 'react'
import { Link } from "react-router-dom";
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
                                    <FooterLink>About Us</FooterLink>
                                    <FooterLink>How it Works</FooterLink>
                                    <FooterLink>Investors</FooterLink>
                                    <FooterLink>Terms of Service</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink>About Us</FooterLink>
                                    <FooterLink>How it Works</FooterLink>
                                    <FooterLink>Investors</FooterLink>
                                    <FooterLink>Terms of Service</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink>Facebook</FooterLink>
                                    <FooterLink>Instagram</FooterLink>
                                    <FooterLink>Twitter</FooterLink>
                                    <FooterLink>Linkedln</FooterLink>
                            </FooterLinkItem>
                        </FooterLinkWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to = '/'>
                            FeedAfrique
                        </SocialLogo>
                        <websiteRights>FeedAfrique (c) 2021 All rights reserved</websiteRights>
                        <SocialIcons>
                            <a href> <FacebookIcon className="fabc mr-4" /> </a>
                            <a href='https://twitter.com/FeedAfrique?s=08'> <TwitterIcon className="fabc mr-4" /> </a>
                            <a href> <InstagramIcon className="fabc mr-4" /> </a>
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
