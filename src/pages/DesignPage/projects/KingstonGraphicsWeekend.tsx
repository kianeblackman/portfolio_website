//* Description: Kington Graphics Weekend project page

// Import statements
import React from 'react';

// Project component
export default function KingstonGraphicsWeekend() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        Kingston Graphics Weekend
      </h1>
      <h2 className='text-1xl my-3 font-body font-light md:text-2xl'>
        An exhibition publication for Kington Graphics Weekend.
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        One of the main goals with this publication was to make it more than
        just a simple pamphlet that visitors could quickly skim through and then
        discard. To do this, we designed the handout to be more like a puzzle,
        with different components that could be "unraveled" and explored. This
        creates a sense of discovery and rewards visitors for taking the time to
        interact with the handout in a more tactile way.
      </p>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Additionally, the handout is designed to double as a poster sleeve, with
        a design on the front that features the event's branding. By unfolding
        the handout and exploring its different components, visitors can
        gradually reveal more and more of the poster design, culminating in a
        complete view of the poster once they've explored everything the handout
        has to offer.
      </p>
      <div className='md:w-3/4'>
        <img
          src='/images/kingston-graphics-weekend/spread-01.jpg'
          className='my-6'
        />
        <img
          src='/images/kingston-graphics-weekend/spread-02.jpg'
          className='my-6'
        />
        <img
          src='/images/kingston-graphics-weekend/spread-03.jpg'
          className='my-6'
        />
        <img
          src='/images/kingston-graphics-weekend/spread-04.jpg'
          className='my-6'
        />
        <img
          src='/images/kingston-graphics-weekend/spread-05.jpg'
          className='my-6'
        />
        <img
          src='/images/kingston-graphics-weekend/poster.gif'
          className='w-full'
        />
      </div>
    </div>
  );
}
