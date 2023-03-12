import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import "./PhotoContent.css";

const PhotoContent = ({ data }) => {
  const { photo, comment } = data;
  return (
    <div className="PhotoContentComponent">
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} kg</li>
            {photo.idade === 1 ? <li>{photo.idade} ano</li> : <li>{photo.idade} anos</li>}
          </ul>
        </div>
      </div>
      <PhotoComments/>
    </div>
  );
};

export default PhotoContent;
