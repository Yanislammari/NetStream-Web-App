import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import { getAllMedias } from "../../services/MediaService";
import { toast } from "sonner";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <HeroBanner backgroundImage="" title="" subtitle="" />
      <MediaSlideshow title="Last medias" medias={[]} />
    </div>
  );
};

export default Home;
