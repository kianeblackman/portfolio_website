// Description: this page lists all the film projects

// Imports
import React from 'react'
import { Link } from 'react-router-dom';

// Page component
export default function FilmPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full p-6 px-6 pb-6">
        <li className="bg-white h-80"><Link to="/film/joyride">Rasharn Powell - Joyride</Link></li>
        <li className="bg-white h-80"><Link to="/film/2-wrecked-2-care">CMAT - 2 Wrecked 2 Care</Link></li>
        <li className="bg-white h-80"><Link to="/film/straws-suck">Straws Suck</Link></li>
        <li className="bg-white h-80"><Link to="/film/&albert">& Albert</Link></li>
        <li className="bg-white h-80"><Link to="/film/take-a-chance">Take a Chance</Link></li>
        <li className="bg-white h-80"><Link to="/film/jargogle">Jargogle</Link></li>
        </div>
      </ul>
    </div>
  )
}
