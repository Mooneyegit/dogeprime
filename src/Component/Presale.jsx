import React from 'react'
import Total from './Total';
import Navbar from './Navbar';
import Footer from './Footer';


 const Presale = () => {
  return (
    <>
    <Total />
    <section className="about-nft">
                <div className="nft-container">

                    <ol className="about-list">
                        <li className="about-item">
                            <div className="about-card">
                                <div className="card-number">01</div>

                                <div className="card-icon">
                                    <img src="https://i.postimg.cc/kg8Qyzg9/single-create-sell-item-1.png" alt="wallet icon" />
                                </div>

                                <h3 className="about-card-title uc">Purchase $ADA</h3>
                                <p className="about-card-text">Purchase $ADA from any exchange of your choice e.g. Binance, Bybit Or OKX.</p>
                            </div>
                        </li>

                        <li className="about-item">
                            <div className="about-card">
                                <div className="card-number">02</div>

                                <div className="card-icon">
                                    <img src="https://i.postimg.cc/FKNLVK6g/single-create-sell-item-2.png" alt="collection icon" />
                                </div>

                                <h3 className="about-card-title uc">Set up your wallet</h3>
                                <p className="about-card-text">Setup a Cardano wallet and transfer the purchased ADA from the exchange. We advice you use Nami or Eternl wallets.</p>
                            </div>
                        </li>

                        <li className="about-item">
                            <div className="about-card">
                                <div className="card-number">03</div>

                                <div className="card-icon">
                                    <img src="https://i.postimg.cc/xd6P4ZBZ/single-create-sell-item-3.png" alt="folder icon" />
                                </div>

                                <h3 className="about-card-title uc">Visit Dogeprime.com </h3>
                                <p className="about-card-text">Visit Dogeprime.com website and click buy $DOGOPRIME, then copy the presale address shown and send $ADA. To avoid hacks and phishing we will never tell you to connect your wallet</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            <div>
       {/* <section class="section2">
<div class="cards">
<div class="card inline-photo show-on-scroll">
<h3>DECENTRALIZED AND COMMUNITY-OWNED</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
<div class="card inline-photo show-on-scroll">
<h3>Embrace blockchain technology</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
<div class="card inline-photo show-on-scroll">
<h3>RISK MANAGEMENT</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
</div>
</section> */}
    </div>



    </>
  )
}


export default Presale;