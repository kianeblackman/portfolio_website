//* Description: Media Planet project page

// Import statements
import React from 'react';

// Project component
export default function MediaPlanet() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        Media Planet
      </h1>
      <h2 className='text-1xl my-3 font-body font-light md:text-2xl'>
        Work created during my time at Media Planet, a leading content marketing
        agency.
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        As the lead designer at Media Planet, it was my role to oversee and
        design all print campaigns for the UK branch. During my time there I
        designed over 65 awareness campaigns aimed at promoting social causes.
        These campaigns were distributed across various newspapers in the UK,
        from{' '}
        <img
          src='/images/media-planet/logo-the-guardian.png'
          className='m-1 inline h-6 rounded-full border border-black p-1'
        />{' '}
        <img
          src='/images/media-planet/logo-the-telegraph.png'
          className='m-1 inline h-6 rounded-full border border-black p-1'
        />
        <img
          src='/images/media-planet/logo-new-scientist.png'
          className='m-1 inline h-6 rounded-full border border-black p-1'
        />{' '}
        <img
          src='/images/media-planet/logo-irish-independent.png'
          className='m-1 inline h-6 rounded-full border border-black p-1'
        />{' '}
        <img
          src='/images/media-planet/logo-city-am.png'
          className='m-1 inline h-6 rounded-full border border-black p-1'
        />{' '}
        and more.
      </p>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        During my time at Media Planet, I had the pleasure of working with
        companies such as Specsavers, Asda, Mothercare and many more. As well as
        designing covers with Price Williams, Jameela Jamil, David Beckham,
        Victoria Beckham Rachel Riley, and even the Pope!
      </p>
      <div>
        <div className='mt-6 mb-3 grid grid-cols-2 gap-6 md:w-3/4'>
          <img src='/images/media-planet/cover-vision-matters.jpg' />
          <img src='/images/media-planet/cover-body-empowerment.jpg' />
          <img src='/images/media-planet/spread-aids.jpg' />
          <img src='/images/media-planet/spread-head.jpg' />
          <img src='/images/media-planet/spread-age.jpg' />
          <img src='/images/media-planet/spread-pride.jpg' />
        </div>
      </div>
      <img src='/images/media-planet/campaigns.png' className='my-6 md:w-3/4' />
      <p className='text-1xl my-6 font-body font-light md:w-3/4'>
        In addition to designing the print campaigns, I also took the initiative
        to create a new social-video product and a series of brand animations to
        be used company-wide. With the first sold case of the video product
        gaining over 1 million views on Facebook.
      </p>
      <div className='grid grid-cols-2 gap-6 md:w-3/4'>
        <img src='/images/media-planet/animation-main.gif' />
        <img src='/images/media-planet/animation-icons.gif' />
      </div>
    </div>
  );
}
