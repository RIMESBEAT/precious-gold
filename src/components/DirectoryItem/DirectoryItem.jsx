import React from "react";
import { useNavigate } from "react-router-dom";
import "./DirectoryItem.css";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onDirectoryHandler = () => navigate(route);
  return (
    <div className="directory__item__container" onClick={onDirectoryHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="directory-text-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
