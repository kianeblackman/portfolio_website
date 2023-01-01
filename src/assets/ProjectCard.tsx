import React from 'react'

interface ProjectCardProps {
    title: string
    src: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
        <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-blue-500 bg-opacity-0 text-center text-5xl font-bold text-white text-opacity-0 hover:bg-opacity-75 hover:text-opacity-100">
                {props.title}
              </h1>
              <img src={props.src} />
            </div>
  )
}
