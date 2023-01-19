// Description: this page lists all the design projects

// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

// Page component
export default function DesignPage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid w-full grid-cols-1 gap-6 p-6 px-6 pb-6 lg:grid-cols-3">
          <Link to="/design/">
            <ProjectCard
              title="Mammals Moo"
              src="/images/mammals-moo-cover.jpg"
            />
          </Link>
          <Link to="/design/">
            <ProjectCard
              title="cktrl - Robyn"
              src="/images/cktrl-robyn-cover.jpg"
            />
          </Link>
          <Link to="/design/">
            <ProjectCard
              title="Media Planet"
              src="/images/media-planet-cover.jpg"
            />
          </Link>
          <Link to="/design/">
            <ProjectCard
              title="Kingston Graphics Weekend"
              src="/images/kingston-graphics-weekend-cover.jpg"
            />
          </Link>
          <Link to="/design/">
            <ProjectCard
              title="Toilet Roll Roll"
              src="/images/toilet-roll-roll-cover.jpg"
            />
          </Link>
          <Link to="/design/">
            <ProjectCard
              title="Rooted and Booted"
              src="/images/rooted-and-booted-cover.jpg"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
}
