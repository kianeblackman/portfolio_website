//* Description: Straws Suck project page

// Import statements
import React from "react";

// Project component
export default function StrawsSuck() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Straws Suck
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A social ad campaign that aims to prevent people from using single use
        straws.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Only 1% of refugees gain access to the UK and so teaming up with Amnesty
        International we asked members of the public to place themselves in the
        shoes of that 1%. By rolling two large dice, with 5 yellow sides and 1
        black side, with the aim of matching the two black sides. Out of 140
        people, no one matched.
      </p>
      <iframe
        className="aspect-video w-full"
        src="https://player.vimeo.com/video/438206611?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
