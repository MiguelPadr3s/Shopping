import React from "react";
import "./CartContainer.css";
import Item from "./Item";
import Summary from "./Summary";
import { useCart } from "../../contexts/CartContext";
import { BsCart4 } from "react-icons/bs";

const CartContainer = () => {
  const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();

  //add item
  const handleAdd = (product) => {
    addToCart(product);
  };

  // remove item
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  // remove item quantity
  const handleRemoveQuantity = (productId) => {
    removeQuantity(productId);
  };

  return (
    <div className="cart-wrapper">
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-container">
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                  handleRemoveQuantity={handleRemoveQuantity}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="no-item">
            <p>
              No item in the cart <BsCart4 />
            </p>
          </div>
        )}
        <Summary cartItems={cartItems}/>
      </div>
    </div>
  );
};

export default CartContainer;
