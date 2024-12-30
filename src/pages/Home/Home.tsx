import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import { getAllMedias } from "../../services/MediaService";
import { toast } from "sonner";
import "./Home.css";

const Home: React.FC = () => {
  const [medias, setMedias] = useState<Media[]>([]);

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
    }
    
    fetchMedias();
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <HeroBanner backgroundImage={medias[2]?.largePicture ?? ""} title={medias[0]?.name} subtitle={medias[0]?.synopsis} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
      <MediaSlideshow title="Last medias" medias={medias} />
    </div>
  );
};

export default Home;
