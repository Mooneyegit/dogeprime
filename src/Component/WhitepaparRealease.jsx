import './Realease.scss'
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assert/Images/release1.png";
import release2 from "../assert/Images/release2.png";
import Card from "./Card";
const WhitepaparRealease = () => {
  return (
    <div id='#whitepaper'>
         <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">What’s DogePrime?</h2>
          <p className="description">
          DogePrime isn’t just a token; it’s a movement, a vibe, and the next-gen memecoin experience. Inspired by the unstoppable Doge spirit, DogePrime is here to bring laughs, decentralization, and a community-first approach to the Cardano ecosystem. If you’re into memes, innovation, and unstoppable Doge energy, this is your pack.<a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
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
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Our Vision</h2>
          <p className="description">
          DogePrime is here to lead the meme revolution on Cardano. With its loyal community, playful spirit, and cutting-edge tech, DogePrime blends fun and finance seamlessly. We’re not just riding the moon-bound rocket; we’re driving it. <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhitepaparRealease