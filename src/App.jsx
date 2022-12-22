import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage.tsx';
import CodePage from './pages/CodePage/CodePage.tsx';
import DesignPage from './pages/DesignPage/DesignPage.tsx';
import FilmPage from './pages/FilmPage/FilmPage.tsx';
import React from 'react';
import './Styles/App.css';

function App() {
  return (
    <div>
      <nav className="grid grid-cols-1 xs:grid-cols-4 h-12 fixed w-full">
        <li className="list-none text-center text-1xl h-12 xs:text-3xl bg-red-500">
          <Link to="about">About</Link>
        </li>
        <li className="list-none text-center text-1xl h-12 xs:text-3xl bg-yellow-500">
          <Link to="code">Code</Link>
        </li>
        <li className="list-none text-center text-1xl h-12 xs:text-3xl bg-blue-500">
          <Link to="design">Design</Link>
        </li>
        <li className="list-none text-center text-1xl h-12 xs:text-3xl bg-green-500">
          <Link to="film">Film</Link>
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
