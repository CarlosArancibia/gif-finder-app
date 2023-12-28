export const GifItem = ({ url, title }) => {
  return (
    <figure className="card">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
