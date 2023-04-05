//* Description: This is the main component of the app. It contains the navigation bar and the routes.

// Statement imports
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './Styles/App.css';

// Page imports
import AboutPage from './pages/AboutPage/AboutPage.js';
import CodePage from './pages/CodePage/CodePage.js';
import DesignPage from './pages/DesignPage/DesignPage.js';
import FilmPage from './pages/FilmPage/FilmPage.js';

// 404 page import
import NotFound from './pages/NotFound.js';

// Commponent imports
import Navbar from './components/Navbar.js';

// Design project imports
import MammalsMoo from './pages/DesignPage/projects/MammalsMoo.js';
import CktrlRobyn from './pages/DesignPage/projects/CktrlRobyn.js';
import MediaPlanet from './pages/DesignPage/projects/MediaPlanet.js';
import KingstonGraphicsWeekend from './pages/DesignPage/projects/KingstonGraphicsWeekend.js';
import ToiletRollRoll from './pages/DesignPage/projects/ToiletRollRoll.js';
import RootedAndBooted from './pages/DesignPage/projects/RootedAndBooted.js';

// Film project imports
import Joyride from './pages/FilmPage/projects/Joyride.js';
import WreckedCare from './pages/FilmPage/projects/WreckedCare.js';
import StrawsSuck from './pages/FilmPage/projects/StrawsSuck.js';
import Ablert from './pages/FilmPage/projects/Ablert.js';
import TakeAChance from './pages/FilmPage/projects/TakeAChance.js';
import Jargogle from './pages/FilmPage/projects/Jargogle.js';

// Code project imports
import PizzaShark from './pages/CodePage/projects/PizzaShark.js';
import ToDoList from './pages/CodePage/projects/ToDoList.js';
import Portfolio from './pages/CodePage/projects/Portfolio.js';
import Hobi from './pages/CodePage/projects/Hobi.js';
import HowLongUntil from './pages/CodePage/projects/HowLongUntil';

// App component
export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutPage />}></Route>
        <Route path='/code' element={<CodePage />}></Route>
        <Route path='/code/pizza-shark' element={<PizzaShark />}></Route>
        <Route path='/code/to-do-list' element={<ToDoList />}></Route>
        <Route path='/code/portfolio' element={<Portfolio />}></Route>
        <Route path='/code/hobi' element={<Hobi />}></Route>
        <Route path='/code/how-long-until' element={<HowLongUntil />}></Route>
        <Route path='/design' element={<DesignPage />}></Route>
        <Route path='/design/mammals-moo' element={<MammalsMoo />}></Route>
        <Route path='/design/cktrl-robyn' element={<CktrlRobyn />}></Route>
        <Route path='/design/media-planet' element={<MediaPlanet />}></Route>
        <Route
          path='/design/toilet-roll-roll'
          element={<ToiletRollRoll />}
        ></Route>
        <Route
          path='/design/kingston-graphics-weekend'
          element={<KingstonGraphicsWeekend />}
        ></Route>
        <Route
          path='/design/rooted-and-booted'
          element={<RootedAndBooted />}
        ></Route>
        <Route path='/film' element={<FilmPage />}></Route>
        <Route path='/film/joyride' element={<Joyride />}></Route>
        <Route path='/film/2-wrecked-2-care' element={<WreckedCare />}></Route>
        <Route path='/film/straws-suck' element={<StrawsSuck />}></Route>
        <Route path='/film/&albert' element={<Ablert />}></Route>
        <Route path='/film/take-a-chance' element={<TakeAChance />}></Route>
        <Route path='/film/jargogle' element={<Jargogle />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}
