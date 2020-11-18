import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import "../index.css"
export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  //Metodo que recorre una api
  const getGifs = async () => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=9ICmnzq1JsbrjnsodRdeDHrub6iz52rX&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
    <div className="card-grid">
      <h3>{counter}</h3>

      {images.map((img) => (
        <GifGridItem 
        key={img.id} 
        {...img}
        
        />
      ))}

      <button onClick={() => setCounter(counter + 1)}>Boton</button>
    </div>
    </>
  );
};

