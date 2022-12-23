// Description: 2 Wrecked 2 Care project page

// Imports
import React from 'react';

// Project component
export default function WreckedCare() {
  return (
    <div className="p-6 pt-16 w-full xs:w-3/4">
      <h1 className="text-5xl xs:text-7xl">2 Wrecked 2 Care</h1>
      <h2 className="text-2xl xs:text-3xl">Music video...</h2>
      <br></br>
      <iframe
        className="w-full aspect-video "
        src="https://www.youtube.com/embed/JE7bVp1e75g"
      ></iframe>
    </div>
  );
}
