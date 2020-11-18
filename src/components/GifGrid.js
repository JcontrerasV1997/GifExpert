import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import "../index.css";
import { getGifs } from "../helpers/getGifs";
export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);
  
  useEffect(() => {
    getGifs(category).then((img) => setImages(img));// eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {/* <h3>{counter}</h3> */}
        {images.map((img) => (<GifGridItem key={img.id} {...img} />))}
        {/* <button onClick={() => setCounter(counter + 1)}>Boton</button> */}
      </div>
    </>
  );
};
