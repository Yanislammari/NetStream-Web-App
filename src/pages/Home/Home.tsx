import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Category from "../../models/Category";
import { getAllMedias, getAllMediasByCategory, getAllMediasByMediaType } from "../../services/MediaService";
import { toast } from "sonner";
import "./Home.css";

const Home: React.FC = () => {
  const [medias, setMedias] = useState<Media[]>([]);
  const [movies, setMovies] = useState<Media[]>([]);
  const [series, setSeries] = useState<Media[]>([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [allMediasByCategory, setAllMediasByCategroy] = useState<{ category: Category, medias: Media[] }[]>([]);
  const navigate = useNavigate();

  const HeroBannerShowMoreAction = (mediaId: string) => {
    navigate(`/media/${mediaId}`);
  };

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

    const fetchMediasByMediaType = async (mediaType: MediaType) => {
      try {
        const fetchedMediasByMediaType = await getAllMediasByMediaType(mediaType);
        switch(fetchedMediasByMediaType) {
          case "Invalid MediaType !": {
            toast.error(`Error during fetching ${mediaType} !`);
            return;
          }
          case "Internal servor error !": {
            toast.error("Internal servor error !");
            return;
          }
          default: {
            if(mediaType === MediaType.Movie) {
              setMovies(fetchedMediasByMediaType as Media[]);
            }
            else if(mediaType === MediaType.Series) {
              setSeries(fetchedMediasByMediaType as Media[]);
            }
            return;
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    const fetchMediasByCategory = async (category: Category) => {
      try {
        const fetchedMediasByCategroy = await getAllMediasByCategory(category);
        switch(fetchedMediasByCategroy) {
          case "Error in category request !": {
            toast.error("Error in category request !");
            return;
          }
          case "Internal servor error !": {
            toast.error("Internal servor error !");
            return;
          }
          default: {
            setAllMediasByCategroy((prev) => [...prev, { category: category, medias: fetchedMediasByCategroy as Media[] }]);     
            return;     
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };
    
    fetchMedias();
    fetchMediasByMediaType(MediaType.Movie);
    fetchMediasByMediaType(MediaType.Series);

    Object.values(Category).forEach((category) => {
      fetchMediasByCategory(category);
    });
  }, []);

  useEffect(() => {
    const randomIndexMedia = Math.floor(Math.random() * medias.length);
    setRandomIndex(randomIndexMedia);
  }, [medias]);

  return (
    <div className="Home">
      <Navbar />
      <HeroBanner backgroundImage={medias[randomIndex]?.largePicture ?? ""} backgroundVideo={medias[randomIndex]?.video ?? ""} title={medias[randomIndex]?.name} subtitle={medias[randomIndex]?.synopsis} showMoreAction={() => HeroBannerShowMoreAction(medias[randomIndex]?.id)} />
      {/* TO IMPLEMENT : MediaSlideshow - Continue Watching */}
      {/* TO IMPLEMENT : MediaSlideshow - Rewatch */}
      {/* TO IMPLEMENT : MediaSlideshow - Recommendations */}
      <MediaSlideshow title="Latest Releases" medias={medias} />
      <MediaSlideshow title="Latest Movies" medias={movies} />
      <MediaSlideshow title="Latest Series" medias={series} />
      {/* TO IMPLEMENT : MediaSlideshow - Most Viewed */}
      {/* TO IMPLEMENT : MediaSlideshow - Most Rated */}
      {allMediasByCategory.map(({ category, medias }) => (
        medias.length > 0 && (
          <MediaSlideshow key={category} title={category} medias={medias} />
        )
      ))}
    </div>
  );
};

export default Home;
