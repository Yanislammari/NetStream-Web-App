import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Category from "../../models/Category";
import { getAllMediasByMediaTypeAndCategory } from "../../services/MediaService";
import { toast } from "sonner";
import "./Series.css";

const Series: React.FC = () => {
  const [allSeriesByCategory, setAllSeriesByCategroy] = useState<{ category: Category, medias: Media[] }[]>([]);
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if(selectedCategory !== "Category") {
      navigate(`/series/${selectedCategory}`);
    }
  };

  useEffect(() => {
    const fetchSeriesByCategory = async (mediaType: MediaType = MediaType.Series, category: Category) => {
      try {
        const fetchedSeriesByCategroy = await getAllMediasByMediaTypeAndCategory(mediaType, category);
        switch(fetchedSeriesByCategroy) {
          case "Invalid MediaType !": {
            toast.error("Error in media type request !");
            return;
          }
          case "Error in category request !": {
            toast.error("Error in category request !");
            return;
          }
          case "Internal servor error !": {
            toast.error("Internal servor error !");
            return;
          }
          default: {
            setAllSeriesByCategroy((prev) => [...prev, { category: category, medias: fetchedSeriesByCategroy as Media[] }]);     
            return;     
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    Object.values(Category).forEach((category) => {
      fetchSeriesByCategory(MediaType.Series, category);
    });
  }, []);

  return (
    <div className="Series">
      <Navbar />
      <CategoryChoice title="Series" selectAction={handleCategoryChange} defaultCategory="Category"/>
      {allSeriesByCategory.map(({ category, medias }) => (
        medias.length > 0 && (
          <MediaSlideshow key={category} title={category} medias={medias} />
        )
      ))}
    </div>
  )
};

export default Series;
