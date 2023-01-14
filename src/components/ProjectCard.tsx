//* Description: this is a custom component card that renders projects on the project pages

// Imports
import React from 'react';

// Component types
interface ProjectCardProps {
  title: string;
  src: string;
}

// Component
export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative">
      <h1 className="absolute flex h-full w-full items-center justify-center bg-white bg-opacity-0 text-center text-5xl font-bold text-black text-opacity-0 hover:rounded-xl hover:bg-opacity-50 hover:text-opacity-100">
        {props.title}
      </h1>
      <img src={props.src} />
    </div>
  );
}
