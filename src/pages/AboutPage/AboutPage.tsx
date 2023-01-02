// Description: About page

// Imports
import React from 'react';
import TecStack from './components/TecStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Work from './components/Work';
import MyStory from './components/MyStory';

// AboutPage component
export default function AboutPage() {
  return (
    <div className="p-6 pt-16">
      <div className="w-full xs:w-3/4">
        <h1 className="pb-3 font-display text-4xl font-bold text-black xs:text-6xl">
          Hello, I'm Kiane Blackman
        </h1>
        <h2 className="text-1xl font-body font-light xs:text-2xl">
          I’m a{' '}
          <span className="rounded-full border border-black bg-orange-400 px-2 text-black">
            developer
          </span>{' '}
          <span className="rounded-full border border-black bg-blue-500 px-2 text-black">
            designer
          </span>{' '}
          <span className="rounded-full border border-black bg-pink-400 px-2 text-black">
            filmmaker
          </span>{' '}
          and all round a pretty creative fellah. Welcome to my portfolio. Grab
          a drink or a snack, take your time and enjoy!
        </h2>
      </div>
      <br></br>
      <div className="w-full xs:w-1/2">
        <MyStory />
        <br></br>
        <Work />
        <br></br>
        <Education />
        <br></br>
        <TecStack />
        <br></br>
        <Contact />
      </div>
    </div>
  );
}
