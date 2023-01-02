// Description: Mammals Moo project page

// Imports
import React from 'react';
import {
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobeacrobatreader,
} from 'react-icons/si';

// Project component
export default function MammalsMoo() {
  return (
    <div className="w-full p-6 pt-16 xs:w-3/4">
      <h1 className="font-head text-4xl font-bold text-neutral-800 xs:text-7xl">
        Mammals Moo
      </h1>
      <h2 className="text-1xl font-body font-light xs:text-2xl">
        As well as being a designer I spend a lot of my time engaged in one of
        my many interests, story telling. Story telling always played a huge
        part of my design process so it only felt natural to want to write my
        own stories. Mammals Moo issue one is the first book in a series of
        short story collections both written and designed by me.
      </h2>
      <p>
        As well as being a designer I spend a lot of my time engaged in one of
        my many interests, story telling. Story telling always played a huge
        part of my design process so it only felt natural to want to write my
        own stories. Mammals Moo issue one is the first book in a series of
        short story collections both written and designed by me.
      </p>
      <br></br>
      <h3 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
        Tec Stack:
      </h3>
      <div className="flex flex-wrap gap-3 pt-3">
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobephotoshop className="pr-1 text-lg" />
          PHOTOSHOP
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobeindesign className="pr-1 text-lg" />
          INDESIGN
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobeillustrator className="pr-1 text-lg" />
          ILLUSTRATOR
        </div>
        <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
          <SiAdobeacrobatreader className="pr-1 text-lg" />
          ACROBAT
        </div>
      </div>
      <img src="/images/mammals-moo-front-back.jpg" />
      <img src="/images/mammals-moo-chicken-end.jpg" />
      <img src="/images/mammals-moo-pig-page.jpg" />
      <img src="/images/mammals-moo-chicken-page-two.jpg" />
      <img src="/images/mammals-moo-chicken-page.jpg" />
      <img src="/images/mammals-moo-end-story.jpg" />
      <img src="/images/mammals-moo-end-title.jpg" />
      <img src="/images/mammals-moo-gif.gif" />
    </div>
  );
}
