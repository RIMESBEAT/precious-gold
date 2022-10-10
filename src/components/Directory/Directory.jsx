import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./Directory.css";
function Directory() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
      route: "shop/hats",
    },
    {
      id: 2,
      title: "Sneakers",
      name: "Adidas NMD",
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      price: 220,
      route: "shop/sneakers",
    },
    {
      id: 3,
      title: "Jackets",
      name: "Black Jean Shearling",
      imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
      price: 125,
      route: "shop/jackets",
    },
    {
      id: 4,
      title: "Womens",
      name: "Blue Tanktop",
      imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
      price: 25,
      route: "shop/womens",
    },
    {
      id: 5,
      title: "Mens",
      name: "Camo Down Vest",
      imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
      price: 325,
      route: "shop/mens",
    },
  ];

  return (
    <div className="directory__item__container">
      {categories.map((category) => (
        <div className="" key={category.id}>
          <DirectoryItem key={category.id} category={category} />
        </div>
      ))}
    </div>
  );
}

export default Directory;
