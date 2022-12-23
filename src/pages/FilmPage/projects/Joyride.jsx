// Description: Joyride project page

// Imports
import React from 'react';

// Project component
export default function Joyride() {
  return (
    <div className="p-6 pt-16 w-full xs:w-3/4">
      <h1 className="text-5xl xs:text-7xl">Rasharn Powell - Joyride</h1>
      <h2 className="text-2xl xs:text-3xl">
        Joyride is a love letter to the carefree life-style of cars and friends.
        Documenting a group of friends as they live through all the ups and
        downs of life, love, laughter and loathing. But, in the end, they are
        content as they Joyride through their lives.
      </h2>
      <br></br>
      <iframe
        className="w-full aspect-video "
        src="https://player.vimeo.com/video/557997500?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
