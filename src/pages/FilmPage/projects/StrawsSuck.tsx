// Description: Straws Suck project page

// Imports
import React from 'react';

// Project component
export default function StrawsSuck() {
  return (
    <div className="p-6 pt-16 w-full xs:w-3/4">
      <h1 className="font-head text-4xl font-bold text-neutral-800 xs:text-7xl">Straws Suck</h1>
      <h2 className="text-2xl xs:text-3xl">A social ad campaign that aims to prevent people from using single use straws.</h2>
      <br></br>
      <iframe className="w-full aspect-video" src="https://player.vimeo.com/video/438206611?title=0&;byline=0&;portrait=0"></iframe>
    </div>
  );
}
