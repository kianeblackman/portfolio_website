// Description: 2 Wrecked 2 Care project page

// Imports
import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

// Project component
export default function WreckedCare() {
  return (
    <div className="w-full p-6 pt-16 xs:w-3/4">
    <h1 className="font-head text-4xl font-bold text-black xs:text-7xl">
    CMAT - 2 Wrecked 2 Care
    </h1>
    <br></br>
      <h2 className="text-1xl font-body font-light xs:text-2xl">A music video for the singer and songwriter CMAT.</h2>
      <br></br>
      <p className="text-1xl font-body font-light">
      2 Wrecked 2 Care is about the anxiety and stress CMAT feels caused from a lack of sleep. She comes home tired after a long shift at work and as she readies for bed the objects around her room spring to life dragging her into yet another sleepless night.
      </p>
      <br></br>
      <iframe
        className="w-full aspect-video "
        src="https://www.youtube.com/embed/JE7bVp1e75g"
      ></iframe>
      <p className="text-1xl font-head font-regular">Assistant Director & Production Assistant</p>
    </div>
  );
}
