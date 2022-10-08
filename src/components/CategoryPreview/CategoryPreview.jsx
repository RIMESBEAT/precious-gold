import React from "react";
import "./CategoryPreview.css";
import ProductCard from "../ProductCard/ProductCard";

function CategoryPreview({ title, products }) {
  return (
    <div className="category__preview__container">
      <h2>
        <span className="preview__title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview__box">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
