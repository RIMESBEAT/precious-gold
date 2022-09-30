import React from "react";
import "./CartItem.css";
function CartItem({ cartItem }) {
  const { name, quantity, imgUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * N{price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
