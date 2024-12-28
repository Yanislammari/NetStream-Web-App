import React, { useRef } from "react";
import Media from "../../models/Media";
import MediaCard from "../MediaCard/MediaCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./MediaSlideshow.css";

interface MediaSlideshowProps {
  title: string;
  medias: Media[];
}

const MediaSlideshow: React.FC<MediaSlideshowProps> = ({ title, medias }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if(sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if(sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="MediaSlideshow">
      <div className="media-slideshow">
        <h2>{title}</h2>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <div className="medias carousel" ref={sliderRef}>
            {medias.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
          <button className="carousel-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSlideshow;
