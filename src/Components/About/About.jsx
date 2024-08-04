import React from 'react'
import './About.css'
import code from '../../assets/code.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <div className="line"></div>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={code} alt="profile" /> 
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced in HTML, CSS, Javascript, React, node.js and express programming languages </p>
                    <p>My passion for frontend development is ...</p>
                </div> 
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Node JS & Express</p><hr style={{width:"50%"}}/></div>  
                    <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div> 
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENT</p>
            </div>
        </div> */}
    </div>
  )
}

export default About