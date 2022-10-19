import React from "react";
import "./CategoryPreview.css";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

function CategoryPreview({ title, products }) {
  const navigate = useNavigate();
  

    const onDirectoryHandler = () => navigate(`/shop/${title}`);
  return (
    <div className="category__preview__container">
      <h2>
        <span
          className="preview__title"
          onClick={onDirectoryHandler}
        >
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview__box">
        {products &&
          products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
