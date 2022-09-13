import React from "react";
import { Outlet } from "react-router-dom";
import myJsonFile from "../../myJsonFile";
import { useState } from "react";
function FullDesign() {
  const [product] = useState(myJsonFile);
  return (
    <div>
      <section id="services" className="">
        <div className="services__container container card__grid">
          {product &&
            product.map(({ imgUrl, id, title, description }) => {
              return (
                <div className="card__box" key={id}>
                  <div className="card">
                    <img src={imgUrl} alt="" className="card__img" />
                    <h3 className="card__head">{title}</h3>
                    <p className="card__details">{description}</p>
                    <button className="btn buy__btn">Add to Cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <Outlet />
    </div>
  );
}

export default FullDesign;

// <div className="services__container container card__grid">
//   <div className="card__box" key={id}>
//     <div className="card">
//       <img src={imgUrl} alt="" className="card__img" />
//       <h3 className="card__head">{title}</h3>
//       <p className="card__details">{description}</p>
//       <button className="btn buy__btn" onClick={handleClickCart}>
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>;
