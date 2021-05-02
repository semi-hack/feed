import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion';
import { delayVariant } from '../variants';
import emailJs from 'emailjs-com';
import '../Contact/contact.css';
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import LinkedIn from "@material-ui/icons/Link"

const Contact = () => {
    const [sending, setSending] = useState('init');

	const cont = useRef(0)
		
		useEffect(() => {
			cont.current.scrollIntoView()
			
		}, [])
        const sendButton = (
            <button type="submit" className="send-button" style={{ backgroundColor: '#4f99b2' }}>
                Send Email
            </button>
        );
    
        const sendingButton = (
            <button type="submit" className="send-button" style={{ backgroundColor: 'orange' }}>
                ...Sending
            </button>
        );
    
        const failedButton = (
            <button type="submit" className="send-button" style={{ backgroundColor: 'red' }}>
                Sending failed
            </button>
        );
    
        const sentButton = (
            <button type="submit" className="send-button" style={{ backgroundColor: 'yellowgreen' }}>
                Email Sent!
            </button>
        );
    

    
        const goToLinkedin = () => {
            window.open('https://linkedin.com/mwlite/in/oluwafolakanmi-oyeleke-649a30200', '_blank');
        };
    
        const goToMail = () => {
            window.open('mailto:', '_blank')
        };
    
        const goToWhatsapp = () => {
            window.open('https://wa.me/+', '_blank');
        };
    
        function sendEmail(e) {
            e.preventDefault();
            const send = e.target;
            setSending('sending');
            emailJs.sendForm('service_kgyfz8d', 'template_ncszlrh', e.target, 'user_K5YKGYxD9VbGM70Z2HXgN').then(
                (result) => {
                    setSending('sent');
                    send.reset();
                    console.log(result);
                    setTimeout(() => {
                        setSending('init');
                    }, 4000);
                },
                (error) => {
                    console.log(error);
                    setSending('failed');
                    setTimeout(() => {
                        setSending('init');
                    }, 4000);
                }
            );
        }
    
        let Button = sendButton;
        if (sending === 'sending') Button = sendingButton;
        else if (sending === 'sent') Button = sentButton;
        else if (sending === 'failed') Button = failedButton;
        else if (sending === 'init') Button = sendButton;
    

    return (
        <motion.div
			className="contactpage"
			variants={delayVariant}
			exit="exit"
			initial="initial"
			animate="enter"
			transition="transition"
		>
			{/* <div className="cont" ref={cont} style={{ height: '4.5rem' }}></div> */}
			<div className="banner" ref={cont}>
				<h3>Contact Us</h3>
				<p> We'd Like To Hear From You</p> 
			</div>
			<div className="contactpage-container">
				<div className="contactpage-left">
					<h1>Let's Talk!</h1>
					<h2>We'd love to know what you have to say</h2>
					<div className="other-contacts">
						<button className="tab cursor" onClick={goToWhatsapp}>
							{/* <img src={Whatsapp} alt="" />  */}
                            <WhatsAppIcon />
							<span>+2349058025285</span>
						</button>
						<button className="tab cursor" onClick={goToLinkedin}>
							{/* <img src={LinkedIn} alt="" /> */}
							<LinkedInIcon />
							<span>linkedin.com</span>
						</button> 
						<button className="tab cursor" onClick={goToMail}>
							{/* <img src={Email} alt="" /> */}
                            <EmailIcon />
							<span>info@feedafrique.com</span>
						</button>
					</div>
				</div>
				<div className="contactpage-right">
					<form onSubmit={sendEmail}>
						{/* <h2>Contact Me</h2> */}
						<div className="form-container">
							<section>
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									placeholder="John Doe"
									name="name"
									required
								/>
							</section>
							<section>
								<label htmlFor="email">Email</label>
								<input
									type="text"
									id="email"
									placeholder="JohnDoe@email.com"
									name="email"
									required
								/>
							</section>
							<section>
								<label htmlFor="name">Subject</label>
								<input
									type="text"
									id="subject"
									placeholder="Subject"
									name="subject"
									required
								/>
							</section>
							<section>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="5"
									placeholder="I like your website :)"
									required
								></textarea>
							</section>
							<section>{Button}</section>
						</div>
					</form>
				</div>
			</div>
			
		</motion.div>
    )
}

export default Contact
