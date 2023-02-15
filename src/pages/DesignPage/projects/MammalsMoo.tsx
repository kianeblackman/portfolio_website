//* Description: Mammals Moo project page

// Import statements
import React from 'react';

// Project component
export default function MammalsMoo() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        Mammals Moo
      </h1>
      <h2 className='text-1xl my-3 font-body font-light md:text-2xl'>
        A collection of short stories written
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Mammals Moo issue one is a short story collection that I wrote and
        designed. The book features a variety of imaginative and
        thought-provoking stories, each with its own unique style and voice. As
        a designer, I created a dynamic and visually interesting design that
        complements the tone and content of each story.
      </p>
      <div className='md:w-3/4'>
        <img src='/images/mammals-moo-front-back.jpg' />
        <img src='/images/mammals-moo-chicken-end.jpg' />
        <img src='/images/mammals-moo-pig-page.jpg' />
        <img src='/images/mammals-moo-chicken-page-two.jpg' />
        <img src='/images/mammals-moo-chicken-page.jpg' />
        <img src='/images/mammals-moo-end-story.jpg' />
        <img src='/images/mammals-moo-end-title.jpg' />
        <img src='/images/mammals-moo-gif.gif' />
      </div>
    </div>
  );
}
