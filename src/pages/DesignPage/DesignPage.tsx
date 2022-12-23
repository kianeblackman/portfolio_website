import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import MammalsMoo from './projects/MammalsMoo.jsx';
import CktrlRobyn from './projects/CktrlRobyn.jsx';
import MediaPlanet from './projects/MediaPlanet.jsx';
import KingstonGraphicsWeekend from './projects/KingstonGraphicsWeekend.jsx';

export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full p-6">
        <div className="bg-white h-80"><Link to="mammals-moo">Mammals Moo</Link></div>
        <div className="bg-white h-80"><Link to="cktrl-robyn">cktrl - Robyn</Link></div></div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full px-6 pb-6">
        <div className="bg-white h-80"><Link to="media-planet">Media Planet</Link></div>
        <div className="bg-white h-80"><Link to="kingston-graphics-weekend">Kingston Graphics Weekend</Link></div></div>
      </ul>
      <Routes>
        <Route path="mammals-moo" element={<MammalsMoo />}></Route>
        <Route path="cktrl-robyn" element={<CktrlRobyn />}></Route>
        <Route path="media-planet" element={<MediaPlanet />}></Route>
        <Route path="kingston-graphics-weekend" element={<KingstonGraphicsWeekend />}></Route>
      </Routes>
    </div>
  )
}
