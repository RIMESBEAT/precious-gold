import React, { useState } from "react";
import "./Designs.css";
import { Outlet, Link } from "react-router-dom";
import myJsonFile from "../../myJsonFile";
function Designs() {
   const [products] = useState(myJsonFile);
  return (
    <div>
      <section id="services">
        <h1 className="heading">Our Services</h1>
        <div className="services__container container card__grid">
         
          {products &&
            products.slice(0, 4).map(({ id, imgUrl, description, title }) => {
              return (
              
                  <div className="card__box " key={id}>
                    <div className="card">
                      <img src={imgUrl} alt="" className="card__img" />
                      <h3 className="card__head"> {title}</h3>
                      <p className="card__details">{description}</p>
                      <Link to="/" className="btn buy__btn">
                        See Details
                      </Link>
                    </div>
                  </div>
              );
            })}
        </div>
        <p className="service__text container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laborum? Commodi molestiae sint assumenda impedit nobis pariatur
          laborum quos quasi nesciunt nemo repellendus porro nam, temporibus
          unde facere recusandae ducimus. Autem a at animi molestiae quae
          consequuntur consectetur eveniet est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus, laborum? Commodi molestiae sint
          assumenda impedit nobis pariatur laborum quos quasi nesciunt nemo
          repellendus porro nam, temporibus unde facere recusandae ducimus.
          Autem a at animi molestiae quae consequuntur consectetur eveniet est.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laborum? Commodi molestiae sint assumenda impedit nobis pariatur
          laborum quos quasi nesciunt nemo repellendus porro nam, temporibus
          unde facere recusandae ducimus. Autem a at animi molestiae quae
          consequuntur consectetur eveniet est.
        </p>
      </section>
      <Outlet />
    </div>
  );
}

export default Designs;
