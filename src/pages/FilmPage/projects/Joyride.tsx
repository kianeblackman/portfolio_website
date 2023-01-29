//* Description: Joyride project page

// Import statements
import React from "react";

// Project component
export default function Joyride() {
  return (
    <div className="mx-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-7xl">
        Rasharn Powell - Joyride
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A music video for the singer and songwriter Rasharn Powell.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Joyride is a love letter to the carefree life-style of cars and friends.
        Documenting a group of friends as they live through all the ups and
        downs of life, love, laughter and loathing. But, in the end, they are
        content as they Joyride through their lives.
      </p>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://player.vimeo.com/video/557997500?title=0&;byline=0&;portrait=0"
      ></iframe>
      <p className="text-1xl font-regular font-head">Co-Director & Editor</p>
    </div>
  );
}
