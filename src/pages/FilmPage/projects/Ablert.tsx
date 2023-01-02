// Description: Ablert project page

// Imports
import React from 'react';

// Project component
export default function Ablert() {
  return (
    <div className="w-full p-6 pt-16 xs:w-1/2">
      <h1 className="font-head text-4xl font-bold text-neutral-800 xs:text-7xl">
        & Albert
      </h1>
      <h2 className="text-2xl xs:text-3xl">
        After a full day knocking on the doors of strangers and asking them if
        we could photograph their junk drawers for a photo-series, myself and
        some friends were invited into an unregarding mans home who said he had
        a great collection of junk draws that he'd be willing to show us.
        <br></br>
        After looking through his draws, a few cups of tea and much enthused
        conversation he mentioned that he had an even greater collection of
        drawings, paintings and poems by him. Many more hours later we knew this
        mans entire life and decided to document some of it.
      </h2>
      <br></br>
      <iframe
        className="aspect-video w-full "
        src="https://player.vimeo.com/video/438205315?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
