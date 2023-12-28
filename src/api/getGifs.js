import { getEnvVaribles } from '../helpers/getEnvVariables';

export const getGifs = async (category) => {
  try {
    const { VITE_API_URL, VITE_API_KEY } = getEnvVaribles();

    const res = await fetch(VITE_API_URL + `?api_key=${VITE_API_KEY}&q=${category}&limit=10`);

    if (!res.ok) throw new Error('Error HTTP: ' + res.status);

    const { data } = await res.json();

    const gifs = data.map(({ id, title = 'Unknown', images }) => {
      return {
        id,
        title,
        url: images.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.log(error);
  }
};
