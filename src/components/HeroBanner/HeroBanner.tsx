import React from "react";
import Button from "../Button/Button";
import "./HeroBanner.css";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="HeroBanner">
      <div className="hb" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="btn">
              <Button text="Show More" color="cornflowerblue" isContainsMargin={false} onClick={() => console.log("")} />
              <Button text="Play an excerpt"  color="cornflowerblue" onClick={() => console.log("")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
