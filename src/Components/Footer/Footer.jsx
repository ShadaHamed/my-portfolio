import React from 'react'
import './Footer.css'
import user from '../../assets/user.png'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <p className='logo'><span className='logo-letter'>S</span>ha<span className='logo-letter'>D</span>a</p>
                <p>web developer intersted in react js.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder= "Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">©️ 2024 Shada Hamed. All rights </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer