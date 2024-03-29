import React, { useState, useEffect } from 'react';

function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((film) => {
        return <li key={film.id}>{film.title}</li>;
      })}
    </ul>
  );
}

export default FilmsList;
