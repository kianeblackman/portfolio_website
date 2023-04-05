//* Description: this page lists all the code projects

// Statement imports
import React from 'react';
import { Link } from 'react-router-dom';

// Commponent imports
import ProjectCard from '../../components/ProjectCard';

// CodePage component
export default function CodePage() {
  return (
    <section>
      <ul className='grid grid-cols-1 gap-6 bg-amber-50 px-6 pb-6 pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Link to='/code/pizza-shark'>
          <ProjectCard
            title='Pizza Shark'
            src='/images/pizza-shark/pizza-shark-cover.jpg'
          />
        </Link>
        <Link to='/code/hobi'>
          <ProjectCard title='Hobï' src='/images/hobi/hobi-cover.jpg' />
        </Link>
        <Link to='/code/to-do-list'>
          <ProjectCard title='To Do List' src='/images/to-do-list-cover.jpg' />
        </Link>
        <Link to='/code/portfolio'>
          <ProjectCard title='Portfolio' src='/images/portfolio-cover.jpg' />
        </Link>
        <Link to='/code/how-long-until'>
          <ProjectCard
            title='How Long Until'
            src='/images/how-long-until/how-long-until-cover.jpg'
          />
        </Link>
      </ul>
    </section>
  );
}
