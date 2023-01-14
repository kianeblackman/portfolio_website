//! Description: This is the navbar component

// Import statements
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Navbar component
export default function Navbar() {
  // Set's the default state background colour
  const [color, setColour] = useState('#FFFBEB');

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

  return (
    <nav className="fixed grid h-6 w-full grid-cols-4">
      <li className="navbar-li bg-yellow-50">
        <NavLink to="/" onClick={() => setColour('#FFFBEB')}>
          <a className="navbar-a">
            ABOUT
          </a>
        </NavLink>
      </li>
      <li className="navbar-li bg-orange-400">
        <NavLink to="/code" onClick={() => setColour('#FB923C')}>
          <a className="navbar-a">
            CODE
          </a>
        </NavLink>
      </li>
      <li className="navbar-li bg-blue-500">
        <NavLink to="/design" onClick={() => setColour('#3B82F6')}>
          <a className="navbar-a">
            DESIGN
          </a>
        </NavLink>
      </li>
      <li className="navbar-li bg-pink-400">
        <NavLink to="/film" onClick={() => setColour('#F472B6')}>
          <a className="navbar-a">
            FILM
          </a>
        </NavLink>
      </li>
    </nav>
  );
}
