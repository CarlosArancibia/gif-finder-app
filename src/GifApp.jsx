import { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { SearchGif } from './components/SearchGif';

export const GifApp = () => {
  const [categories, setCategories] = useState(['naruto']);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;

    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <header className="header">
        <section className="header-content container">
          <div className="content-form">
            <h1>GifApp</h1>
            <SearchGif onAddCategory={onAddCategory} />
          </div>
          <div className="content-img">
            <img src="/search-image.svg" alt="" />
          </div>
        </section>
      </header>
      <main className="main">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </main>
    </>
  );
};
