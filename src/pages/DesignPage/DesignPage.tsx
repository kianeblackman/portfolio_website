import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Project1 from './projects/Project1.jsx';
import Project2 from './projects/Project2.jsx';
import Project3 from './projects/Project3.jsx';
import Project4 from './projects/Project4.jsx';

export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full p-6">
        <li className="bg-white h-80"><Link to="project1">Project 1</Link></li>
        <li className="bg-white h-80"><Link to="project2">Project 2</Link></li></div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full px-6 pb-6">
        <li className="bg-white h-80"><Link to="project3">Project 3</Link></li>
        <li className="bg-white h-80"><Link to="project4">Project 4</Link></li></div>
      </ul>
      <Routes>
        <Route path="project1" element={<Project1 />}></Route>
        <Route path="project2" element={<Project2 />}></Route>
        <Route path="project3" element={<Project3 />}></Route>
        <Route path="project4" element={<Project4 />}></Route>
      </Routes>
    </div>
  )
}
