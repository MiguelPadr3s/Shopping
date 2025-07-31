import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";
import useGetCategories from "../../hooks/useGetCategories";

const CategoryList = () => {
  const { categories, loading} = useGetCategories();
  console.log(categories);
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
