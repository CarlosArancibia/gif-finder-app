import { useEffect, useState } from 'react';
import { getGifs } from '../api/getGifs';

export const useFetch = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setGifs(await getGifs(category));
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
