import React from 'react'
import {Link} from 'react-router-dom';
import '../GetStarted/get.css'

const getStarted = () => {
    return (
        <div className="getBackground">
            <div className="words">
                <h7>Get in touch with us</h7>
                <h3>Learn more about what we do</h3>
                <div className="contactBtn">
                    <Link to='/contact' className="btn">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default getStarted
