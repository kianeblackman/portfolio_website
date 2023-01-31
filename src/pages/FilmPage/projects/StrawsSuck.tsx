//* Description: Straws Suck project page

// Import statements
import React from "react";

// Project component
export default function StrawsSuck() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Straws Suck
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A social ad campaign that aims to prevent people from using single use
        straws.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Straws suck. Get ready to say "NO!" to single-use plastic straws! Our
        planet and marine life are in peril and it's time to take action. In
        this short ad campaign we aim to raise awareness about how scary
        single-use plastic straws truly are. So join us and switch to a reusable
        alternative. Your taste buds and Mother Nature will thank you.
      </p>
      <iframe
        className="aspect-video w-full"
        src="https://player.vimeo.com/video/438206611?title=0&;byline=0&;portrait=0"
      ></iframe>
    </div>
  );
}
