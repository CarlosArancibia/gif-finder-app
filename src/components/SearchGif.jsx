import { useState } from 'react';

export const SearchGif = ({ onAddCategory }) => {
  const [search, setSearch] = useState('');

  const onInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(search);
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="search-gif">Search a category</label>
        <input
          type="text"
          id="search-gif"
          placeholder="Search a gif"
          className="form-input"
          value={search}
          onChange={onInputChange}
        />
      </div>
      <button className="btn">
        <span>Search</span>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
