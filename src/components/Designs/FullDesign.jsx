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
  {/* const openCardView = (e) => {
    e.preventDefault();
    setCardViewIsActive(!cardViewIsActive);
    setSelectedIndex(+e.currentTarget.dataset.index])
  };
....

{images.map((image, index) => (
    <button onClick={openCardView} data-index={index}>
      <div className="grid-item">
        <h1 className="title-with-grid">{image.title}</h1>
        <img
          className="grid-item picture-img"
          data-aos={randChoice(animations)}
          src={image.image}
          alt="nature1"
        />
      </div>
    </button>
))} */}
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
