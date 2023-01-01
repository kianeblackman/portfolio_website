// Description: this page lists all the film projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../utils/ProjectCard';

// Page component
export default function FilmPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 w-full p-6 px-6 pb-6">
          <Link to="/film/">
            <ProjectCard title="Joyride" src="/images/joyride-cover.jpg" />
          </Link>
          <Link to="/film/">
            <ProjectCard title="2 Wrecked 2 Care" src="/images/cmat-2wrecked2care-cover.jpg" />
          </Link>
          <Link to="/film/">
            <ProjectCard title="Straws Suck" src="/images/straws-suck-cover.jpg" />
          </Link>
          <Link to="/film/">
            <ProjectCard title="&Albert" src="/images/albert-cover.jpg" />
          </Link>
          <Link to="/film/">
            <ProjectCard title="Task a Chance" src="/images/take-a-chance-cover.jpg" />
          </Link>
        </div>
      </ul>
    </div>
  );
}
