// Description: this page lists all the film projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

// Page component
export default function FilmPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid w-full grid-cols-1 gap-6 p-6 px-6 pb-6 xs:grid-cols-3">
          <Link to="/film/joyride">
            <ProjectCard title="Joyride" src="/images/joyride-cover.jpg" />
          </Link>
          <Link to="/film/2-wrecked-2-care">
            <ProjectCard
              title="2 Wrecked 2 Care"
              src="/images/cmat-2wrecked2care-cover.jpg"
            />
          </Link>
          <Link to="/film/straws-suck">
            <ProjectCard
              title="Straws Suck"
              src="/images/straws-suck-cover.jpg"
            />
          </Link>
          <Link to="/film/&albert">
            <ProjectCard title="&Albert" src="/images/albert-cover.jpg" />
          </Link>
          <Link to="/film/take-a-chance">
            <ProjectCard
              title="Task a Chance"
              src="/images/take-a-chance-cover.jpg"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
}
