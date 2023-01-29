//* Description: this is a custom component card that renders projects on the project pages

// Import statements
import React from "react";

// Component types
interface ProjectCardProps {
  title: string;
  src: string;
}

// ProjectCard component
export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative z-0">
      <h1 className="absolute flex h-full w-full items-center justify-center bg-white bg-opacity-0 text-center text-5xl font-bold text-black text-opacity-0 hover:bg-opacity-50 hover:text-opacity-100">
        {props.title}
      </h1>
      <img src={props.src} />
    </div>
  );
}
