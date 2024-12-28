import './Realease.scss'
// import { BsArrowRight } from "react-icons/bs";
import release1 from "../assert/Images/dogoprimeface.png";
import release2 from "../assert/Images/banner-bg(2).png";
import Card from "./Card";
const WhitepaparRealease = () => {
  return (
    <div id='#whitepaper'>
         <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">What’s DogePrime?</h2>
          <p className="description">
          DogePrime isn’t just a token; it’s a movement, a vibe, and the next-gen memecoin experience. Inspired by the unstoppable Doge spirit, DogePrime is here to bring laughs, decentralization, and a community-first approach to the Cardano ecosystem. If you’re into memes, innovation, and unstoppable Doge energy, this is your pack.
          </p>
          <p className="description">
            
          </p>
          {/* <p className="description">50% of proceeds go to charity.</p> */}
          {/* <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="DOGEPRIME Series"
            // title="DOGE Man"
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Our Vision</h2>
          <p className="description">
          DogePrime is here to lead the meme revolution on Cardano. With its loyal community, playful spirit, and cutting-edge tech, DogePrime blends fun  seamlessly. We’re not just riding the moon-bound rocket; we’re driving it. 
          </p>
          <p className="description">
          DogePrime is all about fun, memes, and community. It’s not financial advice or an investment
tool. Remember, it’s built for joy, so invest wisely and join for the laughs, not just the gains.
Dogeprime will excel and produce more.          </p>
          {/* <p className="description">50% of proceeds go to charity.</p> */}
          {/* <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhitepaparRealease