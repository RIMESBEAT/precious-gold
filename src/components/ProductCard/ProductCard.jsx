import React from "react";
import "../ProductCard/ProductCard.css";
function ProductCard({ product }) {
  const { imgUrl, id, title, price } = product;
  return (
    <div>
      <section id=" ">
        <div className="card " key={id}>
          <img src={imgUrl} alt="" className="card__img" />
          <h3 className="card__head">{title}</h3>
          <p className="card__price">N{price}</p>
          <button type="button" className="btn buy__btn">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
