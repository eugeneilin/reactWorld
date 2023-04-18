import React, { useState, useEffect } from 'react';
import { filterFilmsByDirector, getListOf } from '../helpers/film.helpers';

export function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState('');

  function getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, 'director');

  return (
    <main className='container'>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='director'>Director</label>
          <select
            className='form-control'
            id='director'
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value=''>All</option>
            {directors.map((director, idx) => {
              return (
                <option key={director + idx} value={director}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </main>
  );
}
