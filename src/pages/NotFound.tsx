import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="z-2 fixed bg-black">
      <h2 className="flex h-screen w-screen items-center justify-center text-white">
        Sorry, that page cannot be found.
      </h2>
      <Link
        className="flex h-screen w-screen items-center justify-center text-white"
        to="/"
      >
        <h3>Go back to the homepage</h3>
      </Link>
    </div>
  );
}
