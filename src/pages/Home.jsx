import React from "react";
import ProductList from "../components/ProductList/ProductList";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <div className="main-content">
      <div className="product">
        <h1 className="section-title">Products</h1>
        <ProductList/>
      </div>

      <div className="category">
        <h1 className="section-title">Categories</h1>
        <CategoryList/>
      </div>
    </div>
  );
};

export default Home;
