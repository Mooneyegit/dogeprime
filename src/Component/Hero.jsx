import React from 'react'
// import { ReactTyped } from "react-typed";
import { Button } from 'react-bootstrap'
import heroImg from '../assert/Images/dogoprimeface.png'
import line from '../assert/Images/line.png'

const PDF_FILE_URL = 'http://localhost:3000/dogeprime.pdf'
const Hero = () => {
  const downloadFileAtURL= (url)=>{
    fetch(url).then(response=>response.blob()).then( blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop()
      const aTag = document.createElement('a')
      aTag.href = blobURL 
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)
      aTag.click();
      aTag.remove();
    })
   
  }
  return (
    <div className='hero-container'>
      <div className='left'>
        <h1 className='title'>$Dogeprime </h1>
        <div className='whatwedo'>
        <img className='line' src={line} alt='line' />
        <h2 className='subtitle'>welcome to Dogeprime</h2>
        </div>
        <p className='desc'>The Alpha Dog of MEMECOINS on Cardano!</p>
        <Button  onClick={()=> downloadFileAtURL(PDF_FILE_URL)} className="hero-btn" variant="danger">whitepaper</Button>
      </div>
      <div className='right'>
        <img className="hero-img"  src={heroImg} alt='hero' />
      </div>
    </div>
  )
}
 
export default Hero