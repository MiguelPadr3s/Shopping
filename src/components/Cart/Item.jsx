import React from "react";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";

const Item = () => {
  return (
    <div className="item-detail">
      <div className="item-info">
        <div className="item-image">
          <img src="" alt="cart product image" />
        </div>
        <div className="item-title">This is Titles</div>
      </div>
      <div className="item-unit-price">$200</div>
      <div className="item-quantity">
         <TbMinus /> 2 <TbPlus /> 
      </div>
      <div className="item-total-price">$400</div>
      <div className="item-remove">
        <TbX />
      </div>
    </div>
  );
};

export default Item;
