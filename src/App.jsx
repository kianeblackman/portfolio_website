import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage.tsx';
import CodePage from './pages/CodePage/CodePage.tsx';
import DesignPage from './pages/DesignPage/DesignPage.tsx';
import FilmPage from './pages/FilmPage/FilmPage.tsx';
import React from 'react';
import { useState } from 'react';
import './Styles/App.css';

function App() {
  const [color, changeColor] = useState('#EF4444');

  document.body.style.backgroundColor = color;
  return (
    <div className="w-full h-screen">
      <nav className="flex mb-4 h-12 sticky top-0">
        <li className="list-none text-center w-1/4 text-4xl bg-red-500">
          <Link to="about" onClick={() => changeColor('#EF4444')}>
            about
          </Link>
        </li>
        <li className="list-none text-center w-1/4 text-4xl bg-yellow-500">
          <Link to="code" onClick={() => changeColor('#EAB308')}>
            code
          </Link>
        </li>
        <li className="list-none text-center items-center w-1/4 text-4xl bg-blue-500">
          <Link to="design" onClick={() => changeColor('#3B82F6')}>
            design
          </Link>
        </li>
        <li className="list-none text-center w-1/4 text-4xl bg-green-500">
          <Link to="film" onClick={() => changeColor('#22C55E')}>
            film
          </Link>
        </li>
      </nav>
      <Routes>
        <Route path="about" exact element={<AboutPage />}></Route>
        <Route path="code" element={<CodePage />}></Route>
        <Route path="design" element={<DesignPage />}></Route>
        <Route path="film" element={<FilmPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
