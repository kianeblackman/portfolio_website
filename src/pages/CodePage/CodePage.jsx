import React from 'react';
import { Link } from 'react-router-dom';

export default function CodePage() {
  return (
    <div>
      <ul className="pt-12">
        <div class="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/code/">
            <img src="/images/trove-cover.jpg" />
          </Link>
          <Link to="/code/">
            <img src="/images/to-do-list-cover.jpg" />
          </Link>
          <Link to="/code/">
            <img src="/images/how-long-until-cover.jpg" />
          </Link>
        </div>
      </ul>
    </div>
  );
}
