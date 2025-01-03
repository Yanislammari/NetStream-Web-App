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
import "./Movies.css";

const Movies: React.FC = () => {
  const [allMoviesByCategory, setAllMoviesByCategroy] = useState<{ category: Category, medias: Media[] }[]>([]);
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if(selectedCategory !== "Category") {
      navigate(`/movies/${selectedCategory}`);
    }
  };

  useEffect(() => {
    const fetchMoviesByCategory = async (mediaType: MediaType = MediaType.Movie, category: Category) => {
      try {
        const fetchedMoviesByCategroy = await getAllMediasByMediaTypeAndCategory(mediaType, category);
        switch(fetchedMoviesByCategroy) {
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
            setAllMoviesByCategroy((prev) => [...prev, { category: category, medias: fetchedMoviesByCategroy as Media[] }]);     
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
      fetchMoviesByCategory(MediaType.Movie, category);
    });
  }, []);

  return (
    <div className="Movies">
      <Navbar />
      <CategoryChoice title="Movies" selectAction={handleCategoryChange} defaultCategory="Category"/>
      {allMoviesByCategory.map(({ category, medias }) => (
        medias.length > 0 && (
          <MediaSlideshow key={category} title={category} medias={medias} />
        )
      ))}
    </div>
  )
};

export default Movies;
