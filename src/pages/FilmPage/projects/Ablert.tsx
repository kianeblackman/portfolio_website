//* Description: Ablert project page

// Import statements
import React from "react";

// Project component
export default function Ablert() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        & Albert
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A short documentary about a strange I met called Albert.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        After a full day knocking on the doors of strangers and asking them if
        we could photograph their junk drawers for a photo-series, myself and
        some friends were invited into an unregarding mans home who said he had
        a great collection of junk draws that he'd be willing to show us. After
        looking through his draws, a few cups of tea and much enthused
        conversation he mentioned that he had an even greater collection of
        drawings, paintings and poems by him. Many more hours later we knew this
        mans entire life and decided to document some of it.
      </p>
      <br></br>
      <iframe
        className="aspect-video w-full "
        src="https://player.vimeo.com/video/438205315?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
