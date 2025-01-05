import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "../MediaCard/MediaCard";
import Media from "../../models/Media";
import "./MediaContainer.css";

interface MediaContainerProps {
  medias: Media[];
}

const MediaContainer: React.FC<MediaContainerProps> = ({ medias }) => {
  return (
    <div className="MediaContainer">
      <div className="medias-container">
        {medias.map((media) => (
          <Link key={media.id} to={`/media/${media.id}`}>
            <MediaCard media={media} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MediaContainer;
