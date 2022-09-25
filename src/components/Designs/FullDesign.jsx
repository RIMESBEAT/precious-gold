import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../ProductContext/ProductContext";

function FullDesign() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid__box">
      {products.map((product) => (

        <ProductCard key={product.id}  product={product} />
      ))}

      <Outlet />
    </div>
  );
}

export default FullDesign;
