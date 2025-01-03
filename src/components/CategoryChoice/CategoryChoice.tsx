import React from "react";
import Category from "../../models/Category";
import "./CategoryChoice.css";

interface CategoryChoiceProps {
  title: string;
  selectAction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultCategory: string | Category;
}

const CategoryChoice: React.FC<CategoryChoiceProps> = ({ title, selectAction, defaultCategory }) => {
  return (
    <div className="CategoryChoice">
      <div className="category-choice">
        <h1>{title}</h1>
        <select onChange={selectAction} value={defaultCategory}>
          <option value="Category">Category</option>
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryChoice;
