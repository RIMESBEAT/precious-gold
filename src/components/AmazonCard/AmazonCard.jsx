import React from "react";
import { useState } from "react";
import myJsonFile from "../../myJsonFile";
import FullDesign from "../Designs/FullDesign";
function AmazonCard() {

  return (
    <div id="services">
      
          <div className="card__grid">
      {myJsonFile.map((item) => (
          <FullDesign
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default AmazonCard;
