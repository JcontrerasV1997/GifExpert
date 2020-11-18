import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories= ;
  const [categories, setcategories] = useState([
    "one punch",
  
  ]);

  //   const handleAdd = () => {
  //     setcategories(['Narutox',...categories]);
  //   };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          // return <li key={ category }> {category} </li>;
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
