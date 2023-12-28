import { GifItem } from './GifItem';
import { useFetch } from '../hooks/useFetch';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetch(category);

  return (
    <>
      <h2 className="subtitle">{category}</h2>
      {isLoading && <span className="loader"></span>}

      <section className="grid container">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </section>
    </>
  );
};
