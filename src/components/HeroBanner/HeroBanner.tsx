import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./HeroBanner.css";

interface HeroBannerProps {
  backgroundImage: string;
  backgroundVideo: string;
  title: string;
  subtitle: string;
  showMoreAction: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage, title, subtitle, backgroundVideo, showMoreAction }) => {
  const [isInView, setIsInView] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  let timeout: NodeJS.Timeout;

  const handleMute = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(!heroRef.current) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsInView(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if(timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    if(isInView) {
      timeout = setTimeout(() => {
        setPlayVideo(true);
        videoRef.current?.play();
      }, 5000);
    } 
    else {
      clearTimeout(timeout);
      setPlayVideo(false);
      videoRef.current?.pause();
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <div className="HeroBanner" ref={heroRef}>
      <div className="hb" style={{ backgroundImage: playVideo ? "none" : `url(${backgroundImage})` }} >
        {playVideo && (
          <video className="video-background" ref={videoRef} src={backgroundVideo} autoPlay muted={isMuted} loop />
        )}
        <div className="container">
          <div className="text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="btn">
              <Button text="Show More" color="cornflowerblue" isContainsMargin={false} onClick={showMoreAction} />
              <Button text={isMuted ? "Unmute" : "Mute"} color="cornflowerblue" onClick={() => handleMute()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
