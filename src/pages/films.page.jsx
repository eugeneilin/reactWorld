import React, { useState, useEffect } from 'react';
import { filterFilmsByDirector, getListOf } from '../helpers/film.helpers';
import { Link } from 'react-router-dom';

export function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState('');

  function getFilm() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((res) => {
        return res.json();
      })
      .then((films) => {
        setList(films);
        console.log(films);
      })
      .catch((err) => console.error(err));
  }

  // after we get the films
  // create an object with title and id (title, id pair)
  // match id to title
  // show the component that has the id that we want, that matches the title in the object

  useEffect(() => {
    getFilm();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, 'director');

  // scenarios to think about
  // from list to singlefilm
  // straight to singlefilm

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
          return (
            <li key={film.id}>
              <Link to={`/film/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
