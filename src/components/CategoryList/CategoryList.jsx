import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";

const CategoryList = () => {
  return (
    <div className="category-list">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategoryList;
