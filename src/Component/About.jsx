import React from "react";
import aboutImage from '../assert/Images/__Raining_Coins-removebg-preview.png'

const About = () => {
  return <div id="about" className="about-container" >
    <div className="left">
      <img className='our-story-image' src={aboutImage} alt="about-image"    />
    </div>
    <div className="dogeGFStoryContent right">
      <h1 className="dogeGFStory">Our Story</h1>
      <p className="dogepara">
        Dogeprime is a community-driven project that aims to bring the best of both worlds: the Doge community and the Girlfriend community. We believe that the two communities have a lot in common, and we want to bring them together to create a new, stronger community that can achieve great things.
      </p>
      <p className="dogepara">
        Our mission is to create a safe space where Doge and Girlfriend enthusiasts can come together to share their love for their favorite things. We want to create a community that is inclusive, welcoming, and supportive, where everyone can feel comfortable being themselves.
      </p>
      <p className="dogepara">
        We are committed to building a community that is built on trust, respect, and mutual support. We believe that by working together, we can achieve great things and create a better world for everyone.
      </p>
    </div>
  </div>;
};

export default About;
