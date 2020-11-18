import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  
  //los effects no pueden ser async
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
