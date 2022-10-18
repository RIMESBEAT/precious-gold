import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Context/CategoriesContext/CategoriesContext";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";
function Category({title}) {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2>{ title}</h2>
      <div className=" category__grid__box">
        
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category;
