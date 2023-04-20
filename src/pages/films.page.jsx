import React, { useState, useEffect } from 'react';
import { filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/film.helpers';
import { Link } from 'react-router-dom';

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

  const { avg_score, total, latest } = getFilmStats(list);

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

      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>

      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
