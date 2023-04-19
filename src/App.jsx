import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FilmsPage, SingleFilmPage } from './pages';
import './App.css';

function App() {
  // code related to title here...

  return (
    <BrowserRouter>
      <nav className='container'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/films'>Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
        <Route path='/film/:id' element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
