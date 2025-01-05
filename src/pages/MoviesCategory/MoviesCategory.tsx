import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import MediaCard from "../../components/MediaCard/MediaCard";
import Media from "../../models/Media";
import MediaType from "../../models/MediaType";
import Category from "../../models/Category";
import { getAllMediasByMediaTypeAndCategory } from "../../services/MediaService";
import { toast } from "sonner";
import "./MoviesCategory.css";

const MoviesCategory: React.FC = () => {
  const [moviesByCategory, setMoviesByCategory] = useState<Media[]>([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    selectedCategory !== "Category" ? navigate(`/movies/${selectedCategory}`) : navigate("/movies");
  };

  useEffect(() => {
    const fetchMoviesByCategory = async (mediaType: MediaType, category: Category) => {
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
            setMoviesByCategory(fetchedMoviesByCategroy as Media[]);
            return;     
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    fetchMoviesByCategory(MediaType.Movie, category as Category);
  }, [category]);

  return (
    <div className="MoviesCategory">
      <Navbar />
      <CategoryChoice title="Movies" selectAction={handleCategoryChange} defaultCategory={category as Category} />
      <div className="medias-container">
        {moviesByCategory.map((movie) => (
          <Link key={movie.id} to={`/media/${movie.id}`}>
            <MediaCard media={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesCategory;
