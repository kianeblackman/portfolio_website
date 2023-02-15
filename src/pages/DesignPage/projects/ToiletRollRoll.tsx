//* Description: Toilet Roll Roll project page

// Import statements
import React from 'react';

// Project component
export default function ToiletRollRoll() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        Toilet Roll Roll
      </h1>
      <h2 className='my-3 font-body text-xl font-light md:text-2xl'>
        Toilet Roll Roll is an adult drawing book featuring toilet roll cores as
        a creative prompt.
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Toilet Roll Roll is an adult drawing book designed to spark creativity
        and fun. Each page features an image of a toilet roll core, and the user
        is encouraged to draw on top of the image to create something new and
        amazing.
      </p>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        I wanted to create a book that was both playful and engaging, while also
        providing a unique and fun experience for the user. The book's design is
        minimalist, allowing the user's own artwork to take center stage.
      </p>
      <div className='w-full md:w-3/4'>
        <img
          src='/images/toilet-roll-roll/cover-back.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-empty.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-drawn-01.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-drawn-02.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-drawn-03.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-drawn-04.jpg'
          className='my-6 w-full bg-white p-3'
        />
        <img
          src='/images/toilet-roll-roll/spread-drawn-05.jpg'
          className='my-6 w-full bg-white p-3'
        />
      </div>
    </div>
  );
}
