import React from 'react'
import './Hero.css'
import code from '../../assets/code.png'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={code} alt='profile' />
      <h1><span>I am Shada Hamed</span>, a web developer</h1>
      <p>web developer with a deep passion for creating dynamic and responsive user interfaces using React. 
       My skills are in React, JavaScript, HTML, CSS, Python, Node js, Express
       and modern web development to build a diverse range of projects for both personal and professional endeavors</p>
      <div className="hero-action">
        <div className="hero-connect"><a className='anchor-link' href='#contact'>Connect with me</a></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
    
  )
}

export default Hero