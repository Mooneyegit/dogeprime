import React from 'react';
import heroImage from '../assert/Images/dogoprimeface.png';
import { Button } from 'react-bootstrap';
import Grass from '../assert/Images/vecteezy_green-grass-on-grid-background_-removebg-preview.png'
import Navbar from './Navbar'
import { Link } from "react-router";

function Header() {

 
  return (
    <>
    <Navbar />
    <section className='hero-container'>
      <div>
        <img className='hero-photo' src={heroImage} alt='hero-image' />
      </div>
      <div>
        <h1 className='hero-text'>Where meme</h1>
        <h1 className='hero-text'>meets Magic</h1>
      </div>
      <div>
        <Button  className="hero-btn" variant="danger"><Link to='/presale'>Presale</Link></Button>
        <Button  className="hero-btn" variant="danger"><Link to='/Whitepaper'>Whitepaper</Link></Button>
      </div>
      <img src={Grass} alt='back-image'/>
    </section>
    </>
  );
}

export default Header;