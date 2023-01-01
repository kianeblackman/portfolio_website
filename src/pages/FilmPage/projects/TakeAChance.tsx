// Description: Take a Chance project page

// Imports
import React from 'react';

// Project component
export default function TakeAChance() {
  return (
    <div className="p-6 pt-16 w-full xs:w-3/4">
      <h1 className="text-5xl xs:text-7xl">Task a Chance</h1>
      <h2 className="text-2xl xs:text-3xl">
        Only 1% of refugees gain access to the UK and so teaming up with Amnesty
        International we asked members of the public to place themselves in the
        shoes of that 1%. By rolling two large dice, with 5 yellow sides and 1
        black side, with the aim of matching the two black sides. Out of 140
        people, no one matched.
      </h2>
      <br></br>
      <iframe
        className="w-full aspect-video "
        src="https://player.vimeo.com/video/454729548?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
