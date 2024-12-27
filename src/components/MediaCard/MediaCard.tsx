import React from "react";
import Media from "../../models/Media";
import "./MediaCard.css";

interface MediaCardProps {
  media: Media;
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  return (
    <div className="MediaCard">
      <img className="media-picture" src={media.picture} alt={`Picture of ${media.name}`} />
    </div>
  );
};

export default MediaCard;
