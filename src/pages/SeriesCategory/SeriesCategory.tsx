import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import Category from "../../models/Category";
import "./SeriesCategory.css";

const SeriesCategory: React.FC = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    selectedCategory !== "Category" ? navigate(`/series/${selectedCategory}`) : navigate("/series");
  };

  return (
    <div className="SeriesCategory">
      <Navbar />
      <CategoryChoice title="Series" selectAction={handleCategoryChange} defaultCategory={category as Category} />
    </div>
  );
};

export default SeriesCategory;
