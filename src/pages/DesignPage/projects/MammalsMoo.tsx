//* Description: Mammals Moo project page

// Import statements
import React from "react";

// Project component
export default function MammalsMoo() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Mammals Moo
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A collection of short stories written
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        As well as being a designer I spend a lot of my time engaged in one of
        my many interests, story telling. Story telling always played a huge
        part of my design process so it only felt natural to want to write my
        own stories. Mammals Moo issue one is the first book in a series of
        short story collections both written and designed by me.
      </p>
      <div>
        <img src="/images/mammals-moo-front-back.jpg" />
        <img src="/images/mammals-moo-chicken-end.jpg" />
        <img src="/images/mammals-moo-pig-page.jpg" />
        <img src="/images/mammals-moo-chicken-page-two.jpg" />
        <img src="/images/mammals-moo-chicken-page.jpg" />
        <img src="/images/mammals-moo-end-story.jpg" />
        <img src="/images/mammals-moo-end-title.jpg" />
        <img src="/images/mammals-moo-gif.gif" />
      </div>
    </div>
  );
}
