// Description: this page lists all the film projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Page component
export default function FilmPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/film/joyride">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Joyride - Rashan
              </h1>
              <img src="/images/joyride-cover.jpg" />
            </div>
          </Link>
          <Link to="/film/2-wrecked-2-care">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                cmat - 2 Wrecked 2 Care
              </h1>
              <img src="/images/cmat-2wrecked2care-cover.jpg" />
            </div>
          </Link>
          <Link to="/film/straws-suck">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Straws Suck
              </h1>
              <img src="/images/straws-suck-cover.jpg" />
            </div>
          </Link>
          <Link to="/film/&albert">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                & Albert
              </h1>
              <img src="/images/albert-cover.jpg" />
            </div>
          </Link>
          <Link to="/film/take-a-chance">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Take a Chance
              </h1>
              <img src="/images/take-a-chance-cover.jpg" />
            </div>
          </Link>
        </div>
      </ul>
    </div>
  );
}
