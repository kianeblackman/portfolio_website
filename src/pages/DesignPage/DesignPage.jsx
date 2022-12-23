// Description: this page lists all the design projects

// Imports
import React from 'react'
import { Link } from 'react-router-dom';

// Page component
export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full p-6">
        <div className="bg-white h-80"><Link to="/design/mammals-moo">Mammals Moo</Link></div>
        <div className="bg-white h-80"><Link to="/design/cktrl-robyn">cktrl - Robyn</Link></div></div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full px-6 pb-6">
        <div className="bg-white h-80"><Link to="/design/media-planet">Media Planet</Link></div>
        <div className="bg-white h-80"><Link to="/design/kingston-graphics-weekend">Kingston Graphics Weekend</Link></div>
        <div className="bg-white h-80"><Link to="/design/toilet-roll-roll">Toilet Roll Roll</Link></div>
        </div>
      </ul>
    </div>
  )
}
