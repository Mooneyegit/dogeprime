import './Free.scss'
import Card from "./Card";
import icon from "../assert/Images/icon.png";
import super1 from "../assert/Images/dogoprimeface.png";
import release2 from "../assert/Images/dogoprimeface.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free air drops </h2>
          <p className="description">
            join Presale  today and you'll get a free Dogeprime when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            // series="DOGE Magic"
            // title="MEME FUN"
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            // series="DOGE "
            // title="DOGE PRIMEMAN"
          />
        </div>
      </div>
    </div>
  );
}