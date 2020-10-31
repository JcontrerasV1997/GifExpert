import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=9ICmnzq1JsbrjnsodRdeDHrub6iz52rX&q=naruto&limit=25&offset=0&rating=g&lang=en";
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
  };
  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
