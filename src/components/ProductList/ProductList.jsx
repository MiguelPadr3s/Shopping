import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { useProduct } from "../../contexts/ProductContext";

const ProductList = () => {
  const { products } = useProduct();
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
