import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import MediaCard from "../../components/MediaCard/MediaCard";
import Media from "../../models/Media";
import Category from "../../models/Category";
import { getAllMediasByCategory } from "../../services/MediaService";
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
    const fetchSeriesByCategory = async (category: Category) => {
      try {
        const fetchedSeriesByCategroy = await getAllMediasByCategory(category);
        switch(fetchedSeriesByCategroy) {
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

    fetchSeriesByCategory(category as Category);
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
