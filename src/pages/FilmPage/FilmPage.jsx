// Description: this page lists all the film projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Page component
export default function FilmPage() {
  return (
    <div>
      <ul class="pt-12">
        <div class="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/film/joyride">
            <img src="/images/joyride-cover.jpg" />
          </Link>
          <Link to="/film/2-wrecked-2-care">
            <img src="/images/cmat-2wrecked2care-cover.jpg" />
          </Link>
          <Link to="/film/straws-suck">
            <img src="/images/straws-suck-cover.jpg" />
          </Link>
          <Link to="/film/&albert">
            <img src="/images/albert-cover.jpg" />
          </Link>
          <Link to="/film/take-a-chance">
            <img src="/images/take-a-chance-cover.jpg" />
          </Link>
        </div>
      </ul>
    </div>
  );
}
