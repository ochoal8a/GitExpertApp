import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "One piece",
    "DBZ",
  ]);

  const addCatecory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>
      {/* <AddCategory onAddCategory={setCategories}></AddCategory> */}
      {/* <button onClick={ addCatecory}>Agregar</button> */}
      <AddCategory onNewCategory={(value) => addCatecory(value)} />

      {categories.map((category) => (
        <GifGrid category={category} key={category}></GifGrid>
      ))}
    </>
  );
};
