import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./Directory.css";
function Directory() {
  const categories = [
    {
      id: 1,
      title: "Stringing",
      name: "Brown Brim",
      imageUrl: "http://beaddiagrams.com/wp-content/uploads/lacy_net_1.jpg",
      price: 25,
      route: "shop/stringing",
    },
    {
      id: 2,
      title: "Weaving",
      name: "Adidas NMD",
      imageUrl:
        "https://i.etsystatic.com/13502784/r/il/7d2ad3/1023421040/il_fullxfull.1023421040_llj8.jpg",
      price: 220,
      route: "shop/weaving",
    },
    {
      id: 3,
      title: "Looming",
      name: "Black Jean Shearling",
      imageUrl:
        "https://i.pinimg.com/474x/75/8a/57/758a5726b18a8228725b7efd9e1bec1f.jpg",
      price: 125,
      route: "shop/looming",
    },
    {
      id: 4,
      title: "Embroidery",
      name: "Blue Tanktop",
      imageUrl: "https://static-uc.olist.ng/upload/20200311/oqop4k0vv9d.jpg",
      price: 25,
      route: "shop/embroidery",
    },
    {
      id: 5,
      title: "Wrapping",
      name: "Camo Down Vest",
      imageUrl:
        "https://www.ahwenepa.com/wp-content/uploads/2019/10/Artboard-12-100.jpg",
      price: 325,
      route: "shop/wrapping",
    },
  ];

  return (
    <div className="directory__container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
