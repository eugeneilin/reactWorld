import { Component } from 'react';

class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((res) => res.json())
      .then((data) => this.setState({ list: data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;

/*

Create a method to retrieve the list of films.

Create a method called getFilms on the FilmsList class
The method should call the fetch function with the following url parameter:
https://studioghibliapi-d6fc8.web.app/films
Call the then method on the returned promise
the first then call should receive a callback function that returns the result parsed to json
Make another then call on the returned promise
the second then call should receive a callback function that uses this.setState() to set this.state.list equal to the result
Lastly add a catch method call that should receive a callback function that will handle an error if one occurs

*/
