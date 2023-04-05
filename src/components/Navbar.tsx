// Import Statements
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // State to keep track of which item is active and to set the background color
  const [activeItem, setActiveItem] = useState('ABOUT');
  const [color, setColor] = useState('#FFFBEB');

  // Set the background color from localStorage when the component mounts
  useEffect(() => {
    const data = localStorage.getItem('my-background-color');
    if (data) {
      setColor(data);
    }
  }, []);

  // Set the background color and save it to localStorage whenever it changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
    localStorage.setItem('my-background-color', color);
  }, [color]);

  // Function to handle when a list item is clicked
  function handleClick(item) {
    // Set the active item and reset the background color to default
    setActiveItem(item);
    setColor('#FFFBEB');
  }

  return (
    <nav className='fixed top-0 z-10 grid h-6 w-full grid-cols-4'>
      <li
        className={`navbar-li ${
          activeItem === 'ABOUT' ? 'bg-yellow-50' : 'bg-yellow-500'
        }`}
      >
        <NavLink to='/' onClick={() => handleClick('ABOUT')}>
          <a className='navbar-a'>ABOUT</a>
        </NavLink>
      </li>
      <li
        className={`navbar-li ${
          activeItem === 'CODE' ? 'bg-yellow-50' : 'bg-orange-400'
        }`}
        /*  sets the class name of a navigation list item based on whether or not it's the active item. If it's the active item, it gets the "bg-yellow-50" class, otherwise it gets the "bg-orange-400" class. */
      >
        <NavLink to='/code' onClick={() => handleClick('CODE')}>
          <a className='navbar-a'>CODE</a>
        </NavLink>
      </li>
      <li
        className={`navbar-li ${
          activeItem === 'DESIGN' ? 'bg-yellow-50' : 'bg-blue-500'
        }`}
      >
        <NavLink to='/design' onClick={() => handleClick('DESIGN')}>
          <a className='navbar-a'>DESIGN</a>
        </NavLink>
      </li>
      <li
        className={`navbar-li ${
          activeItem === 'FILM' ? 'bg-yellow-50' : 'bg-pink-400'
        }`}
      >
        <NavLink to='/film' onClick={() => handleClick('FILM')}>
          <a className='navbar-a'>FILM</a>
        </NavLink>
      </li>
    </nav>
  );
}
