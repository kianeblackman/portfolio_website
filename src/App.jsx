// Description: This is the main component of the app. It contains the navigation bar and the routes.

//Additional imports
import { Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Styles/App.css';

//Page imports
import AboutPage from './pages/AboutPage/AboutPage';
import CodePage from './pages/CodePage/CodePage';
import DesignPage from './pages/DesignPage/DesignPage';
import FilmPage from './pages/FilmPage/FilmPage';

//Project imports
import Joyride from './pages/FilmPage/projects/Joyride';
import WreckedCare from './pages/FilmPage/projects/WreckedCare';
import StrawsSuck from './pages/FilmPage/projects/StrawsSuck';
import Ablert from './pages/FilmPage/projects/Ablert';
import TakeAChance from './pages/FilmPage/projects/TakeAChance';
import Jargogle from './pages/FilmPage/projects/Jargogle';

function App() {
  //set's the default state background colour
  const [color, setColour] = useState('');

  //set's the background colour to the colour stored in local storage on page refresh
  useEffect(() => {
    const data = localStorage.getItem('my-background-colour');
    if (data) {
      setColour(data);
    }
  }, []);

  //sets the background colour to the colour passed in
  let lsColour = (document.body.style.backgroundColor = color);

  //stores the last set background colour in local storage
  useEffect(() => {
    localStorage.setItem('my-background-colour', lsColour);
  });

  //returns the navigation bar and the routes
  return (
    <div>
      <nav className="grid grid-cols-4 h-6 fixed w-full">
        <li className="flex items-center justify-center list-none text-1xl h-12 xs:text-2xl bg-yellow-500">
          <Link to="/code" onClick={() => setColour('#EAB308')}>
            Code
          </Link>
        </li>
        <li className="flex items-center justify-center list-none text-1xl h-12 xs:text-2xl bg-blue-500">
          <Link to="/design" onClick={() => setColour('#3B82F6')}>
            Design
          </Link>
        </li>
        <li className="flex items-center justify-center list-none text-1xl h-12 xs:text-2xl bg-green-500">
          <Link to="/film" onClick={() => setColour('#22C55E')}>
            Film
          </Link>
        </li>
        <li className="flex items-center justify-center text-ellipsis list-none text-1xl h-12 xs:text-2xl bg-red-500">
          <Link to="/" onClick={() => setColour('#EF4444')}>
            About
          </Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" exact element={<AboutPage />}></Route>
        <Route path="/code" element={<CodePage />}></Route>
        <Route path="/design" element={<DesignPage />}></Route>
        <Route path="/film" element={<FilmPage />}></Route>
        <Route path="/film/joyride" element={<Joyride />}></Route>
        <Route path="/film/2-wrecked-2-care" element={<WreckedCare />}></Route>
        <Route path="/film/straws-suck" element={<StrawsSuck />}></Route>
        <Route path="/film/&albert" element={<Ablert />}></Route>
        <Route path="/film/take-a-chance" element={<TakeAChance />}></Route>
        <Route path="/film/jargogle" element={<Jargogle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
