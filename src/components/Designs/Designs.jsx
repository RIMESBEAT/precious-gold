import React, { useState } from "react";
import "./Designs.css";
import { Outlet } from "react-router-dom";
import PRODUCT_DATA from "../../myJsonFile.json";
import ProductCard from "../ProductCard/ProductCard";
function Designs() {
  const [products] = useState(PRODUCT_DATA);
  return (
    <div className="">
      <h1 className="heading">Our Services</h1>
      <div className="grid__box ">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Designs;
