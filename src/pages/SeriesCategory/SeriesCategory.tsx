import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import MediaCard from "../../components/MediaCard/MediaCard";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Category from "../../models/Category";
import { getAllMediasByMediaTypeAndCategory } from "../../services/MediaService";
import { toast } from "sonner";
import "./SeriesCategory.css";

const SeriesCategory: React.FC = () => {
  const [seriesByCategory, setSeriesByCategory] = useState<Media[]>([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    selectedCategory !== "Category" ? navigate(`/series/${selectedCategory}`) : navigate("/series");
  };

  useEffect(() => {
    const fetchSeriesByCategory = async (mediaType: MediaType, category: Category) => {
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
            setSeriesByCategory(fetchedSeriesByCategroy as Media[]);
            return;     
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    fetchSeriesByCategory(MediaType.Series, category as Category);
  }, [category]);

  return (
    <div className="SeriesCategory">
      <Navbar />
      <CategoryChoice title="Series" selectAction={handleCategoryChange} defaultCategory={category as Category} />
      <div className="medias-container">
        {seriesByCategory.map((serie) => (
          <Link key={serie.id} to={`/media/${serie.id}`}>
            <MediaCard media={serie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeriesCategory;
