import React from "react";

const Summary = ({ cartItems }) => {
  //Total summary for cart summary
  const totalAmount = cartItems.reduce((acc, item)=>{
    return (acc + item.price * item.quantity);
  }, 0);

  // add 2% tax on the totalAmount
  const taxAmount = totalAmount * 0.02;

  // Total quantity in the cart
  const totalQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);


  // Total price
  const totalPrice = totalAmount + taxAmount;


  return (
    <div className="cart-summary">
      <h3 className="summary-title">Summary</h3>
      <div className="summary-total">
        <span>Subtotal*: </span> ${totalAmount.toFixed(2)}
      </div>
      <div className="summary-total-tax">
        <span>Tax Charges (2%): </span> ${taxAmount.toFixed(2)}
      </div>

      <div className="summary-total-quantity">
        <span>Total Quantity*: </span> {totalQuantity}
      </div>

      <div className="summary-total-amount">
        <span>Total Price: </span> ${totalPrice.toFixed(2)}
      </div>
      <button className="check-out-btn">Proceed to checkout</button>
    </div>
  );
};

export default Summary;
