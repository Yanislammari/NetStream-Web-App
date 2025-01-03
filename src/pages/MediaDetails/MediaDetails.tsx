import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Media from "../../models/Media";
import { getMediaById } from "../../services/MediaService";
import { toast } from "sonner";
import "./MediaDetails.css";

const MediaDetails: React.FC = () => {
  const [media, setMedia] = useState<Media>();
  const { mediaId } = useParams();
  const navigate = useNavigate();

  const HeroBannerShowMoreAction = (mediaId: string) => {
    navigate(`/media/${mediaId}`);
  };

  useEffect(() => {
    const fetchMedia = async () => {
      const fetchedMedia = await getMediaById(mediaId as string);
      switch(fetchedMedia) {
        case "Media not found !": {
          toast.error("Media not found !");
          navigate("/home");
          return;
        }
        case "Invalid Media ID !": {
          toast.error("Invalid Media ID !");
          navigate("/home");
          return;
        }
        case "Internal servor error !": {
          toast.error("Internal servor error !");
          navigate("/home");
          return;
        }
        default: {
          setMedia(fetchedMedia as Media);
          return;
        }
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="MediaDetails">
      <Navbar />
      <HeroBanner backgroundImage={media?.largePicture ?? ""} backgroundVideo={media?.video ?? ""} title={media?.name ?? ""} subtitle={media?.synopsis ?? ""} showMoreAction={() => HeroBannerShowMoreAction(media?.id ?? "")} />
    </div>
  );
};

export default MediaDetails;
