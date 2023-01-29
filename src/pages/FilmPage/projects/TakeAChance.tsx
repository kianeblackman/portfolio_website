//* Description: Take a Chance project page

// Import statements
import React from "react";

// Project component
export default function TakeAChance() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Take a Chance
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        An awareness campaign for the charity Amnesty International about the
        refugee crisis.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Only 1% of refugees gain access to the UK and so teaming up with Amnesty
        International we asked members of the public to place themselves in the
        shoes of that 1%. By rolling two large dice, with 5 yellow sides and 1
        black side, with the aim of matching the two black sides. Out of 140
        people, no one matched.
      </p>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://player.vimeo.com/video/454729548?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
