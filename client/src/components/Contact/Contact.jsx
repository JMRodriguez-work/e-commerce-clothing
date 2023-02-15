import React from 'react';
import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-wrapper">
            <span>CONTACT US:</span>
            <div className="contact-wrapper__email">
                <input type="email" placeholder="Enter your e-mail..." />
                <button className='email-button' type='button'>JOIN US</button>
            </div>
            <div className="contact-wrapper__icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    </div>
  )
}

export { Contact }