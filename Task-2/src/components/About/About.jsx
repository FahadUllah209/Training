import React from 'react'
import "./About.css"

function About() {
  return (      
    <div className="about-container">
    <h1>About Us</h1>
    <section className="about-section">
        <h2>Who We Are</h2>
        <p>We are dedicated to providing innovative solutions for accurate and efficient painting cost estimations. Our platform integrates AI-powered recommendations, real-time pricing, and contractor connections to streamline your painting projects.</p>
    </section>
    
    <section className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to simplify the process of estimating painting costs and selecting the best materials and professionals for your needs. We strive to make home improvement projects more accessible and hassle-free.</p>
    </section>

    <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>Our team consists of passionate developers, designers, and industry experts committed to bringing you the best experience. Together, we work hard to ensure that every aspect of our platform meets the highest standards of quality and innovation.</p>
    </section>
</div>
  )
}

export default About
