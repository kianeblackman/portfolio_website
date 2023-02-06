//* Description: Portfolio project page

// Import statements
import React from "react";
import * as Icon from "../../../utils/TecStackIcons";

// Project component
export default function Portfolio() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Portfolio
      </h1>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        The site you're on right now!
      </h2>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Tec Stack
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        I wanted to use this site as an opportunity to not only showcase my work
        but also to learn new technologies such as Tailwind CSS and Vite. I also
        wanted to use this site as a way to learn more about TypeScript.
      </p>
      <ul className="my-3 flex flex-wrap gap-3 md:w-3/4">
        <Icon.Typescript />
        <Icon.ReactJs />
        <Icon.Vite />
        <Icon.TailwindCss />
      </ul>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        Rest of page in build...
      </h2>
    </div>
  );
}
