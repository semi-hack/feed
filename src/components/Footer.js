import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
    return (
        <>
         <footer>
         <div className="w-full bg-blue-500">
          <div className="xl:px-40 pb-12 lg:px-20 md:px-14 flex flex-row justify-between">
            <div className="flex flex-col space-y-4">
              <p className="opacity-50">Feed Afrique</p>
            </div>
            <div className="flex flex-col space-y-4">
              <Link className="opacity-50" to="">About Us</Link>
              <Link className="opacity-50" to="">Contact</Link>
              <Link className="opacity-50" to="">Privacy Policy</Link>
              <Link className="opacity-50" to="">Terms and Condition</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link className="opacity-50" to="">About Us</Link>
              <Link className="opacity-50" to="">Contact</Link>
              <Link className="opacity-50" to="">Privacy Policy</Link>
              <Link className="opacity-50" to="">Terms and Condition</Link>
              <Link className="opacity-50" to="">Guidelines for Review</Link>
            </div>
            <div className="flex flex-row">
              <Link to="">
                <FacebookIcon className="fabc mr-4" />
              </Link>
              <Link to="">
                <TwitterIcon className="fabt mr-4" />
              </Link>
              <Link to="">
                <InstagramIcon className="fabi mr-4" />
              </Link>
              <Link to="">
                <WhatsAppIcon className="fabw mr-4" />
              </Link>
            </div>
          </div>
        </div>
         </footer>
        </>
    )
}

export default Footer;