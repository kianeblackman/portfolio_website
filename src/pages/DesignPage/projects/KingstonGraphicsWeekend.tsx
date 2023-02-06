//* Description: Kington Graphics Weekend project page

// Import statements
import React from "react";

// Project component
export default function KingstonGraphicsWeekend() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
      Kingston Graphics Weekend
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        An exhibition publication for Kington Graphics Weekend.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        As the lead designer at Media Planet, it was my role to oversee and
        design all print campaigns for the UK branch. During my time there I
        designed over 65 awareness campaigns aimed at promoting social causes.
        These campaigns were distributed across various newspapers in the UK,
        from and more.
      </p>
      <div className="md:w-3/4">
        <img
          src="/images/kingston-graphics-weekend/spread-01.jpg"
          className="my-6"
        />
        <img
          src="/images/kingston-graphics-weekend/spread-02.jpg"
          className="my-6"
        />
        <img
          src="/images/kingston-graphics-weekend/spread-03.jpg"
          className="my-6"
        />
        <img
          src="/images/kingston-graphics-weekend/spread-04.jpg"
          className="my-6"
        />
        <img
          src="/images/kingston-graphics-weekend/spread-05.jpg"
          className="my-6"
        />
        <img
          src="/images/kingston-graphics-weekend/poster.gif"
          className="w-full"
        />
      </div>
    </div>
  );
}
