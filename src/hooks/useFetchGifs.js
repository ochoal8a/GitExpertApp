import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const newImagenes = await getGifs(category);
    setImages(newImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return {
    images,
    isloading,
  };
};
