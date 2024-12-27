import React from "react";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaCard from "../../components/MediaCard/MediaCard";
import "./Home.css";
import Category from "../../models/Category";

const Home: React.FC = () => {

  {/* Temporary mocking */}
  const media: Media = {
    id: "",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "http://localhost:3001/uploads/media-pictures/1735001232943-picture.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  return (
    <div className="Home">
      <Navbar />
      {/* This is a mock for HeroBanner component, I will implement the data recovery system from the server to make this component dynamic. */}
      <HeroBanner backgroundImage="https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABU0mi6aPR8UMyIvzScWQKmhvT2V0mK29NE0nK8-i36tGa7Htc3e57tm2dFtgpI63SZBBsO8BuzDzaqF9PQIKjT6SvP-mu-MAQ7ZC.jpg?r=a57" title="The Walking Dead" subtitle="The story follows the character of Rick Grimes (played by Andrew Lincoln), a sheriff's deputy in Kings County (Georgia). He wakes up from a coma of several weeks to discover that the population has been ravaged by an unknown epidemic which transforms human beings into undead, called 'walkers'." />
      <MediaCard media={media} />
    </div>
  );
};

export default Home;
