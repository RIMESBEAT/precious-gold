import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Context/CategoriesContext/CategoriesContext";
import ProductCard from "../ProductCard/ProductCard";

function Category() {
  const { Category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[Category]);

  useEffect(() => {
    setProducts(categoriesMap[Category]);
  }, [Category, categoriesMap]);
  return (
    <div className="grid__box">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Category;
