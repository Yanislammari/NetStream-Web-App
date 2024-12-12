import React from "react";
import Button from "../../components/button/Button";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <div className="App">
      <div className="hero-banner">
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">Movies, TV Shows, Series... Welcome to <span>NetStream</span> !</h1>
          <p className="hero-banner-subtitle">Ready to watch ? Click here to create or restart your membership.</p>
          <Button text={"Click here !"} color="cornflowerblue"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
