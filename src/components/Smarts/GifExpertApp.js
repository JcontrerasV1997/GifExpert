import React, { useState } from "react";
import { AddCategory } from "../Dummies/AddCategory";
import { GifGrid } from "../Dummies/GifGrid";

export const GifExpertApp = () => {
  // const categories= ;
  const [categories, setcategories] = useState(["One Punch"]); //estado inicial

  //   const handleAdd = () => {
  //     setcategories(['Narutox',...categories]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setcategories} />
      <hr />
      <ol>
        {/* Iteracion por map */}
        {categories.map((category) => (
          // return <li key={ category }> {category} </li>;
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
