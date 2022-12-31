// Description: this page lists all the design projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Page component
export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid w-full grid-cols-1 gap-6 p-6 px-6 pb-6 xs:grid-cols-3">
          <Link to="/design/mammals-moo">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
                Mammals Moo
              </h1>
              <img src="/images/mammals-moo-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/cktrl-robyn">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
                cktrl - Robyn
              </h1>
              <img src="/images/cktrl-robyn-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/media-planet">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
                Media Planet
              </h1>
              <img src="/images/media-planet-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/kingston-graphics-weekend">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
                Kingston Graphics Weekend
              </h1>
              <img src="/images/kingston-graphics-weekend-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/toilet-roll-roll">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
                Toilet Roll Roll
              </h1>
              <img src="/images/toilet-roll-roll-cover.jpg" />
            </div>
          </Link>
          <Link to="/design/rooted-and-booted">
            <div className="relative">
              <h1 className="absolute flex h-full w-full items-center justify-center bg-white text-5xl font-bold opacity-0 hover:opacity-75">
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
