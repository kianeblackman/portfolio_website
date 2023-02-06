//* Description: this page lists all the code projects

// Statement imports
import React from "react";
import { Link } from "react-router-dom";

// Commponent imports
import ProjectCard from "../../components/ProjectCard";

// CodePage component
export default function CodePage() {
  return (
    <section>
      <ul className="mx-6 mb-6 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link to="/code/hobï">
          <ProjectCard title="Hobï" src="/images/hobï-cover.jpg" />
        </Link>
        {/* <Link to="/code/sandbox">
          <ProjectCard title="Sandbox" src="/images/sandbox-cover.jpg" />
        </Link> */}
        <Link to="/code/">
          <ProjectCard title="To Do List" src="/images/to-do-list-cover.jpg" />
        </Link>
        <Link to="/code/portfolio">
          <ProjectCard
            title="How Long Until"
            src="/images/portfolio-cover.jpg"
          />
        </Link>
      </ul>
    </section>
  );
}
