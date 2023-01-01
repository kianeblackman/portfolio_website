// Description: Joyride project page

// Imports
import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

// Project component
export default function Joyride() {
  return (
    <div className="w-full p-6 pt-16 xs:w-3/4">
      <h1 className="font-head text-4xl font-bold text-black xs:text-7xl">
        Rasharn Powell - Joyride
      </h1>
      <br></br>
      <h2 className="text-1xl font-body font-light xs:text-2xl">A music video for the singer and songwriter Rasharn Powell.</h2>
      <br></br>
      <p className="text-1xl font-body font-light">
        Joyride is a love letter to the carefree life-style of cars and friends.
        Documenting a group of friends as they live through all the ups and
        downs of life, love, laughter and loathing. But, in the end, they are
        content as they Joyride through their lives.
      </p>
      <br></br>
      <iframe
        className="aspect-video w-full"
        src="https://player.vimeo.com/video/557997500?title=0&;byline=0&;portrait=0"
      ></iframe>
      <p className="text-1xl font-head font-regular">Co-Director & Editor</p>
    </div>
  );
}
