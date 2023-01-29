//* Description: 2 Wrecked 2 Care project page

// Import statements
import React from "react";

// Project component
export default function WreckedCare() {
  return (
    <div className="xs:w-3/4 w-full p-6 pt-16">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-7xl">
        CMAT - 2 Wrecked 2 Care
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A music video for the singer and songwriter CMAT.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        2 Wrecked 2 Care is about the anxiety and stress CMAT feels caused from
        a lack of sleep. She comes home tired after a long shift at work and as
        she readies for bed the objects around her room spring to life dragging
        her into yet another sleepless night.
      </p>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://www.youtube.com/embed/JE7bVp1e75g"
      />
      <p className="text-1xl font-regular font-head">
        Role || Assistant Director & Production Assistant
      </p>
    </div>
  );
}
