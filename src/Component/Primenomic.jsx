import React from 'react';
import pIcon from '../assert/Images/dogoprimeface.png'



const Primenomic = () => {
  return (
    <div id='primenomic' className="tokenomics">
      <div className='left'>
        <h1 className='dogeGFStoryContent'>Primenomic</h1>
        <p>DogePrime isn’t just a token; it’s a movement, a vibe, and the next-gen memecoin experience.
Inspired by the unstoppable Doge spirit, DogePrime is here to bring laughs, decentralization,
and a community-first approach to the Cardano ecosystem. If you’re into memes, innovation,
and unstoppable Doge energy, this is your pack</p>
      </div>
      <div className='right'>
        <img width={'600px'}src={pIcon} alt='primenomic' />
      </div>
    </div>
  );
};

export default Primenomic;
