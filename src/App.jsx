import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FilmsPage } from './pages';
import './App.css';

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
