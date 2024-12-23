import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Download } from './Download';


const Total = () => {
  return (
    <section className='buy-container '>
      <div className='wrapper'>
        <div className='buy-prime-header'>
          <span>$DOGEPRIME</span>
          <span>PRESALE</span>
        </div>
        <div className='presale-detail-detail'>
          <div className='presale-progress cc-home'>
            <div className='presale-flex'>
              <div>ADA RAISED</div>
              <div className='presale-detail-text'>$70,000,</div>
            </div>
          </div>
          <div className='presale-progress-bar'>
          <ProgressBar animated now={15} />
          </div>
        </div>
       </div>
       <Download />
    </section>
    
  )
}

export default Total