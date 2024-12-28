import React from "react";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import "./Home.css";
import Category from "../../models/Category";

const Home: React.FC = () => {

  {/* Temporary mocking */}
  const media1: Media = {
    id: "1",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "http://localhost:3001/uploads/media-pictures/1735001232943-picture.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media2: Media = {
    id: "2",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media3: Media = {
    id: "2",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://data.fou-de-puzzle.com/.8/squid-game-1000-pieces--puzzle.93224-1.fs.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media4: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media5: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://karoo.me/site/assets/files/19358/prison-break.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media6: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media7: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media8: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media9: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://www.manga-news.com/public/images/dvd/.naruto-visuel-anime_large.webp",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const media10: Media = {
    id: "3",
    name: "Scarface",
    synopsis: "",
    year: 1986,
    mediaType: MediaType.Movie,
    categories: [Category.Action, Category.Crime],
    picture: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
    largePicture: "http://localhost:3001/uploads/media-large-pictures/1735001232945-largepicture.jpg"
  }

  const medias: Media[] = [media1, media2, media4, media5, media6, media7, media8, media9, media10];

  return (
    <div className="Home">
      <Navbar />
      {/* This is a mock for HeroBanner component, I will implement the data recovery system from the server to make this component dynamic. */}
      <HeroBanner backgroundImage="https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABU0mi6aPR8UMyIvzScWQKmhvT2V0mK29NE0nK8-i36tGa7Htc3e57tm2dFtgpI63SZBBsO8BuzDzaqF9PQIKjT6SvP-mu-MAQ7ZC.jpg?r=a57" title="The Walking Dead" subtitle="The story follows the character of Rick Grimes (played by Andrew Lincoln), a sheriff's deputy in Kings County (Georgia). He wakes up from a coma of several weeks to discover that the population has been ravaged by an unknown epidemic which transforms human beings into undead, called 'walkers'." />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
    </div>
  );
};

export default Home;
