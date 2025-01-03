import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import Category from "../../models/Category";
import "./MoviesCategory.css";

const MoviesCategory: React.FC = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    selectedCategory !== "Category" ? navigate(`/movies/${selectedCategory}`) : navigate("/movies");
  };

  return (
    <div className="MoviesCategory">
      <Navbar />
      <CategoryChoice title="Movies" selectAction={handleCategoryChange} defaultCategory={category as Category} />
    </div>
  );
};

export default MoviesCategory;
