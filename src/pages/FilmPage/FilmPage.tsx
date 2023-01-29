//* Description: this page lists all the film projects

// Statement imports
import React from "react";
import { Link } from "react-router-dom";

// Commponent imports
import ProjectCard from "../../components/ProjectCard";

// Page component
export default function FilmPage() {
  return (
    <section>
      <ul className="mx-6 mb-6 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </ul>
    </section>
  );
}
