import React from 'react';

export default function AboutPage() {
  return (
    <div className="p-6 pt-16">
      <div className="w-3/4">
        <h1 className="text-6xl">Hello, I'm Kiane Blackman</h1>
        <h2 className="text-2xl">
          I’m a <span className="underline">developer</span>,{' '}
          <span className="underline">designer</span>,{' '}
          <span className="underline">filmmaker</span> and all round a pretty
          creative fellah. Welcome to my portfolio. Grab a drink or a snack,
          take your time and enjoy!
        </h2>
      </div>
      <br></br>
      <div className="w-1/2">
        <h2 className="text-2xl underline">My Story</h2>
        <h3>
          I’ve always loved problem solving. It’s been the common thread
          throughout all of the different career paths I’ve taken. I enjoy
          trying things I’ve never tried before, jumping into projects and
          taking no issue in making mistakes.
          <br></br>
          <br></br>
          Here’s a video of me lituraly jumping into something I’d only been
          learning for three hours:
          <br></br>
          <br></br>
          <iframe
            className="w-full aspect-video "
            src="https://www.youtube.com/embed/kf4WRWkapfk"
          ></iframe>
          <br></br>
          If you’re not convinced by that, in{' '}
          <span className="underline">September 2022</span> I took another jump
          into something that I’d been wanting to tackel for years, coding.
          Throughout my different careers I’ve been interested in learning how
          to code but lack of time and fear of wasted time was a constant
          barrier faced.
          <br></br>
          <br></br>
          After setting up a gardening business in January 2022 I was given a
          window in the winter period to set my tools aside and embarked on a
          journey into code through the School of Code bootcamp. Out of 2000
          applications, a rigorous interview process and the most intense 16
          weeks of my life I can readily say that I’m feeling more than ready to
          begin a new career as a Software Developer.
        </h3>
        <br></br>
        <h2 className="text-2xl underline">Work</h2>
        <h3>
          Business Owner (Feb 2022-Present) at Rooted and Booted<br></br>
          Graphic Designer (2015-Present) Freelancer<br></br>
          Gardener (Aug 2019 - Mar 2022) at The Dab Hand<br></br>
          Project Coordinator (Oct 2020 - May 2021) at London Business
          Partnership
          <br></br>
          Business Owner (2020) at Box.Din<br></br>
          Lead Designer (Jul 2018-Nov 2019) at Mediaplanet<br></br>
          Designer (2016-2018) at Springboard<br></br>
          Event photographer and filmmaker (2016-2018) at Togada Studios
        </h3>
        <br></br>
        <h2 className="text-2xl underline">Programs</h2>
        <h3>
          HTML — CSS — Tailwind CSS — JavaScript — React — UI Libaries — Vite —
          Git — NodeJS — Express — PostgreSQL — Jest — Cypress — Typescript —
          Auth0 — Accessibility Tools
        </h3>
        <br></br>
        <h2 className="text-2xl underline">Education</h2>
        <h3>
          Coding Bootcamp at School of Code (Oct 2022-Feb2023)<br></br>
          First Class Honors, Graphic Design BA Hons at Kingston University
          (2016-2019)<br></br>
          Art & Design Foundation Course at Sussex Downs Collage (2014- 2015)
          <br></br>
        </h3>
        <br></br>
        <h2 className="text-2xl underline">Contact</h2>
        <h3>
          Softwear Developer<br></br>
          kianeblackman@gmail.com<br></br>
          +44 (0) 7736 515 571<br></br>
          @kiane_blackman
        </h3>
      </div>
    </div>
  );
}
