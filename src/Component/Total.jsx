import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Clip from './Clip';

const Total = () => {
  return (
    <section>
      <div className='wrapper'>
        <div className='buy-prime-header'>
          <span className='uc-darkpink-text'>$DOGEPRIME</span>
          PRESALE
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
       <Clip />
    </section>
    
  )
}

export default Total