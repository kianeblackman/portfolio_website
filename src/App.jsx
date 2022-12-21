import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './components/AboutPage/AboutPage.tsx';
import CodePage from './components/CodePage/CodePage.tsx';
import DesignPage from './components/DesignPage/DesignPage.tsx';
import FilmPage from './components/FilmPage/FilmPage.tsx';
import './Styles/App.css';

function App() {
  return (
    <>
      <nav className="flex mb-4 h-12 sticky top-0">
        <li className="list-none w-1/4 text-4xl bg-red-500">
          <Link to="/">about</Link>
        </li>
        <li className="w-1/4 text-4xl bg-yellow-500">
          <Link to="code">code</Link>
        </li>
        <li className="w-1/4 text-4xl bg-blue-500">
          <Link to="design">design</Link>
        </li>
        <li className="w-1/4 text-4xl bg-green-500">
          <Link to="film">film</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="code" element={<CodePage />}></Route>
        <Route path="design" element={<DesignPage />}></Route>
        <Route path="film" element={<FilmPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
