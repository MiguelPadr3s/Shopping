import React from "react";
import { TbPlus } from "react-icons/tb";
import "./ProductCard.css";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = (product) => {
    addToCart(product);
  };
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={product.image} alt="prduct image" />
      </div>
      <div className="card-detail">
        <Link to={`/product/${product.id}`}>
          <h4 className="card-title">{product.title}</h4>
          <div className="card-category">{product.category}</div>
        </Link>

        <div className="card-flex">
          <div className="card-price">${product.price}</div>
          <div className="card-button" onClick={() => handleAdd(product)}>
            <TbPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
