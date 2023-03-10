// Description: Jargogle project page

// Imports
import React from 'react';

// Project component
export default function Jargogle() {
  return (
    <div className="p-6 pt-16 w-full xs:w-3/4">
      <h1 className="text-5xl xs:text-7xl">Jargogle</h1>
      <h2 className="text-2xl xs:text-3xl">
        Jargogle; a verb meaning to jumble or confuse and it dates to the 1690s.
      </h2>
      <br></br>
      <iframe
        className="w-full aspect-video "
        src="https://player.vimeo.com/video/438206317?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
