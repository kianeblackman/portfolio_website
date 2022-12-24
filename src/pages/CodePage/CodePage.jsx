import React from 'react';
import { Link } from 'react-router-dom';

export default function CodePage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full p-6">
          <li className="bg-white h-80">
            <Link to="trove">Trove</Link>
          </li>
          <li className="bg-white h-80">
            <Link to="to-do-list">To Do List</Link>
          </li>
          <li className="bg-white h-80">
            <Link to="portfolio">Portfolio</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
