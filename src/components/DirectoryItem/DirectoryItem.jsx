import React from "react";
import { useNavigate } from "react-router-dom";
import "./DirectoryItem.css";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onDirectoryHandler = () => navigate(route);
  return (
    <div>
      <div className="" onClick={onDirectoryHandler}>
        <img src={imageUrl} alt={`${title}`} />
        <div className="directory__content">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default DirectoryItem;
