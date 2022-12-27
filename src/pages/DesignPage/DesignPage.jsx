// Description: this page lists all the design projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Page component
export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/design/mammals-moo">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Mammals Moo
              </h1>
              <img src="/images/mammals-moo-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/cktrl-robyn">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                cktrl - Robyn
              </h1>
              <img src="/images/cktrl-robyn-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/media-planet">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Media Planet
              </h1>
              <img src="/images/media-planet-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/kingston-graphics-weekend">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Kingston Graphics Weekend
              </h1>
              <img src="/images/kingston-graphics-weekend-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/toilet-roll-roll">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Toilet Roll Roll
              </h1>
              <img src="/images/toilet-roll-roll-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/rooted-and-booted">
            <div className="relative">
              <h1 className="absolute flex bg-white h-full w-full opacity-0 hover:opacity-50 items-center justify-center">
                Rooted and Booted
              </h1>
              <img src="/images/rooted-and-booted-cover.jpg" />
            </div>
          </Link>
        </div>
      </ul>
    </div>
  );
}
