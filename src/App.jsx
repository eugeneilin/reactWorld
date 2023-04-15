import React from 'react';
import FilmsList from './components/filmsList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['ready', 'set', 'GO'],
      text: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    let updatedList = [...this.state.list, this.state.text];

    this.setState({
      list: updatedList,
      text: '',
    });
  }

  render() {
    return (
      <main>
        <h1>ToDos Reactor</h1>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <button type='submit'>Add</button>
          </div>
        </form>
        <ul>
          {this.state.list.map((item, idx) => (
            <li key={item + idx}>{item}</li>
          ))}
        </ul>
        {/* FilmsList */}
        <h2>Films List Exercise</h2>
        <p>Fetch API</p>
        <FilmsList />
      </main>
    );
  }
}

export default App;
