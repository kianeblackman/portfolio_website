// Description: This component is used to display the creative stack of technologies I use

// Imports
import React from 'react';
import {
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiNpm,
  SiPostman,
  SiNetlify,
  SiCoronarenderer,
  SiJest,
  SiCypress,
  SiTestinglibrary,
} from 'react-icons/si';

// File component
export default function TecStackCreative() {
  return (
    <ul className="flex flex-wrap gap-3 pt-3">
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiGithub className="pr-1 text-lg" />
        GIT HUB
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiReact className="pr-1 text-lg" />
        REACT
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiNextdotjs className="pr-1 text-lg" />
        NEXT.JS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiTailwindcss className="pr-1 text-lg" />
        TAILWIND CSS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiNodedotjs className="pr-1 text-lg" />
        NODE.JS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiExpress className="pr-1 text-lg" />
        EXPRESS.JS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiVite className="pr-1 text-lg" />
        VITE
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiNpm className="pr-1 text-lg" />
        NPM
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiPostman className="pr-1 text-lg" />
        POSTMAN
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiNetlify className="pr-1 text-lg" />
        NETLIFY
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiCoronarenderer className="pr-1 text-lg" />
        RENDER
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiJest className="pr-1 text-lg" />
        JEST
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiCypress className="pr-1 text-lg" />
        CYPRESS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiTestinglibrary className="pr-1 text-lg" />
        TESTING LIBRARY
      </li>
    </ul>
  );
}
