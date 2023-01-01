// Description: Joyride project page

// Imports
import React from 'react';
import {
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from 'react-icons/si';

// Project component
export default function Joyride() {
  return (
    <div className="w-full p-6 pt-16 xs:w-3/4">
      <h1 className="font-head text-4xl font-bold text-neutral-800 xs:text-7xl">
        Rasharn Powell - Joyride
      </h1>
      <h2 className="text-1xl pb-3 font-body font-light xs:text-2xl">
        Joyride is a love letter to the carefree life-style of cars and friends.
        Documenting a group of friends as they live through all the ups and
        downs of life, love, laughter and loathing. But, in the end, they are
        content as they Joyride through their lives.
      </h2>
      <h2 className="font-regular font-head text-2xl underline underline-offset-4">
        Tec Stack:
      </h2>
      <div className="flex flex-wrap gap-3 pt-3">
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobephotoshop className="pr-1 text-lg" />
          PHOTOSHOP
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobeindesign className="pr-1 text-lg" />
          INDESIGN
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobepremierepro className="pr-1 text-lg" />
          PREMIER PRO
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobeaftereffects className="pr-1 text-lg" />
          AfterEffects
        </div>
      </div>
      <br></br>
      <iframe
        className="aspect-video w-full"
        src="https://player.vimeo.com/video/557997500?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
