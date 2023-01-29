//* Description: this page lists all the design projects

// Statement imports
import React from "react";
import { Link } from "react-router-dom";

// Commponent imports
import ProjectCard from "../../components/ProjectCard";

// Page component
export default function DesignPage() {
  return (
    <section>
      <ul className="mx-6 mb-6 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </ul>
    </section>
  );
}
