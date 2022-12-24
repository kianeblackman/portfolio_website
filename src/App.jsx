// Description: This is the main component of the app. It contains the navigation bar and the routes.

// Additional imports
import { Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Styles/App.css';

// Page imports
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import CodePage from './pages/CodePage/CodePage.jsx';
import DesignPage from './pages/DesignPage/DesignPage.jsx';
import FilmPage from './pages/FilmPage/FilmPage.jsx';

// Design project imports
import MammalsMoo from './pages/DesignPage/projects/MammalsMoo.jsx';
import CktrlRobyn from './pages/DesignPage/projects/CktrlRobyn.jsx';
import MediaPlanet from './pages/DesignPage/projects/MediaPlanet.jsx';
import KingstonGraphicsWeekend from './pages/DesignPage/projects/KingstonGraphicsWeekend.jsx';
import ToiletRollRoll from './pages/DesignPage/projects/ToiletRollRoll.jsx';

// Film project imports
import Joyride from './pages/FilmPage/projects/Joyride.jsx';
import WreckedCare from './pages/FilmPage/projects/WreckedCare.jsx';
import StrawsSuck from './pages/FilmPage/projects/StrawsSuck.jsx';
import Ablert from './pages/FilmPage/projects/Ablert.jsx';
import TakeAChance from './pages/FilmPage/projects/TakeAChance.jsx';
import Jargogle from './pages/FilmPage/projects/Jargogle.jsx';

// Code project imports
import Trove from './pages/CodePage/projects/Trove.jsx';
import ToDoList from './pages/CodePage/projects/ToDoList.jsx';
import Portfolio from './pages/CodePage/projects/Portfolio.jsx';

function App() {
  // Set's the default state background colour
  const [color, setColour] = useState('');

  // Set's the background colour to the colour stored in local storage on page refresh
  useEffect(() => {
    const data = localStorage.getItem('my-background-colour');
    if (data) {
      setColour(data);
    }
  }, []);

  // Sets the background colour to the colour passed in
  let lsColour = (document.body.style.backgroundColor = color);

  // Stores the last set background colour in local storage
  useEffect(() => {
    localStorage.setItem('my-background-colour', lsColour);
  });

  // Returns the navigation bar and the all app routes
  return (
    <div>
      <nav className="grid grid-cols-4 h-6 fixed w-full">
        <li className="flex items-center justify-center text-ellipsis list-none text-1xl h-12 xs:text-2xl bg-[#FEC11A]">
          <Link to="/" onClick={() => setColour('#FEC11A')}>
            About
          </Link>
        </li>
        <li className="flex items-center justify-center list-none text-1xl h-12 xs:text-2xl bg-[#EF4444]">
          <Link to="/code" onClick={() => setColour('#EF4444')}>
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
      </nav>
      <Routes>
        <Route path="/" exact element={<AboutPage />}></Route>
        <Route path="/code" element={<CodePage />}></Route>
        <Route path="/code/trove" element={<Trove />}></Route>
        <Route path="/code/to-do-list" element={<ToDoList />}></Route>
        <Route path="/code/portfolio" element={<Portfolio />}></Route>
        <Route path="/design" element={<DesignPage />}></Route>
        <Route path="/design/mammals-moo" element={<MammalsMoo />}></Route>
        <Route path="/design/cktrl-robyn" element={<CktrlRobyn />}></Route>
        <Route path="/design/media-planet" element={<MediaPlanet />}></Route>
        <Route
          path="/design/toilet-roll-roll"
          element={<ToiletRollRoll />}
        ></Route>
        <Route
          path="/design/kingston-graphics-weekend"
          element={<KingstonGraphicsWeekend />}
        ></Route>
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
