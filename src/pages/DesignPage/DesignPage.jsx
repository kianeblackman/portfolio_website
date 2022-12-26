// Description: this page lists all the design projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Page component
export default function DesignPage() {
  return (
    <div>
      <ul class="pt-12">
        <div class="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/design/mammals-moo">
            <img src="/images/mammals-moo-cover.jpg" />
          </Link>
          <Link to="/design/cktrl-robyn">
            <img src="/images/cktrl-robyn-cover.jpg" />
          </Link>
          <Link to="/design/media-planet">
            <img src="/images/media-planet-cover.jpg" />
          </Link>
          <Link to="/design/kingston-graphics-weekend">
            <img src="/images/kingston-graphics-weekend-cover.jpg" />
          </Link>
          <Link to="/design/toilet-roll-roll">
            <img src="/images/toilet-roll-roll-cover.jpg" />
          </Link>
        </div>
      </ul>
    </div>
  );
}
