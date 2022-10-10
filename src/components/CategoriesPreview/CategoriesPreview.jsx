import React, { useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesContext/CategoriesContext";
import CategoryPreview from "../CategoryPreview/CategoryPreview";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="category__container__box">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div className="grid__box " key={title}>
            <CategoryPreview key={title} title={title} products={products} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesPreview;
