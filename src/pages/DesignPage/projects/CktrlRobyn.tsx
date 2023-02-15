//* Description: cktrl Robyn project page

// Import statements
import React from 'react';

// Project component
export default function CktrlRobyn() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        cktrl - Robyn
      </h1>
      <h2 className='text-1xl my-3 font-body font-light md:text-2xl'>
        A record cover and sheet music for the artist Robyn.
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        I had the pleasure of working with jazz musician cktrl on the re-print
        of his album, Robyn. Specifically, I designed a collection of sheet
        music for the album's tracks, creating a visually stunning and
        functional resource for musicians who want to learn and play the music
        themselves.
      </p>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        The sheet music is designed with a modern and minimalist aesthetic,
        incorporating elements of the album's original artwork in a way that is
        both cohesive and striking. I paid close attention to the typography and
        layout of the music, making sure that it was clear and easy to read for
        musicians of all levels.
      </p>
      <div className='md:w-3/4 w-full'>
        <img src='/images/cktrl/display.jpg' className='my-6 w-full'/>
        <img src='/images/cktrl/cover.jpg' className='my-6 w-full'/>
        <img src='/images/cktrl/spread-01.jpg' className='my-6 w-full'/>
        <img src='/images/cktrl/spread-02.jpg' className='my-6 w-full'/>
      </div>
    </div>
  );
}
