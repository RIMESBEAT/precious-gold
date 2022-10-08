import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./ProductCard.css";
function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div>
      <div className="card ">
        <img src={imageUrl} alt={`${name}`} className="card__img" />
        <h3 className="card__head">{name}</h3>
        <p className="card__price">N{price}</p>
        <button
          type="button"
          className="btn buy__btn"
          onClick={addProductToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
