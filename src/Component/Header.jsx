import React from 'react';
import heroImage from '../assert/Images/dogoprimeface.png';
import { Button } from 'react-bootstrap';
import Grass from '../assert/Images/vecteezy_green-grass-on-grid-background_-removebg-preview.png'
import Navbar from './Navbar'
import { Link } from "react-router";
import Curved from './Curved';

function Header() {

  return (
    <>
    <Navbar />
    <section className='hero-container'>
      <div>
        <img className='hero-photo' src={heroImage} alt='hero-image' />
      </div>
      <div className='hero-text-container'>
        <h1 className='hero-text'>Where meme</h1>
        <h1 className='hero-text'>meets Magic</h1>
      </div>
      <div className='btn-hero'>
        <button  className="learn-more" variant="danger"><a href='/presale'>Presale</a></button>
        <button  className="learn-more" variant="danger"><a href='/Whitepaper'>Whitepaper</a></button>
      </div>
      <img src={Grass} alt='back-image'/>
      <Curved />
    </section>
    
    </>
  );
}

export default Header;