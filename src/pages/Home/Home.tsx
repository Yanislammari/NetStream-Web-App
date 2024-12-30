import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import { getAllMedias, getAllMediasByMediaType } from "../../services/MediaService";
import { toast } from "sonner";
import "./Home.css";

const Home: React.FC = () => {
  const [medias, setMedias] = useState<Media[]>([]);
  const [movies, setMovies] = useState<Media[]>([]);

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const fetchedMedias = await getAllMedias();
        if(fetchedMedias === "Internal servor error !") {
          toast.error("Internal servor error !");
          return;
        }
        else {
          setMedias(fetchedMedias as Media[]);
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    const fetchMediasMovies = async () => {
      try {
        const fetchedMovies = await getAllMediasByMediaType(MediaType.Movie);
        switch(fetchedMovies) {
          case "Invalid MediaType !": {
            toast.error("Error during fetching movies !");
            return;
          }
          case "Internal servor error !": {
            toast.error("Internal servor error !");
            return;
          }
          default: {
            setMovies(fetchedMovies as Media[]);
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };
    
    fetchMedias();
    fetchMediasMovies();
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <HeroBanner backgroundImage={medias[2]?.largePicture ?? ""} title={medias[0]?.name} subtitle={medias[0]?.synopsis} />
      <MediaSlideshow title="Latest Releases" medias={medias} />
      <MediaSlideshow title="Latest Movies" medias={movies} />
    </div>
  );
};

export default Home;
