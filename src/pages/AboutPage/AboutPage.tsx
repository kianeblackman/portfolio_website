//* Description: About page

// Import statements
import React from 'react';
import * as Icon from '../../utils/TecStackIcons';

// AboutPage component
export default function AboutPage() {
  return (
    <main className="mx-6 mt-12 grid md:grid-cols-1 lg:grid-cols-2">
      <section>
        <h1 className="mb-3 font-head text-4xl font-bold text-black lg:text-6xl">
          Hello, I'm Kiane Blackman
        </h1>
        <h2 className="text-1xl my-3 font-body font-light lg:text-2xl">
          I'm a{' '}
          <span className="rounded-full border border-black bg-orange-400 px-2 text-black">
            developer
          </span>{' '}
          <span className="rounded-full border border-black bg-blue-500 px-2 text-black">
            designer
          </span>{' '}
          <span className="rounded-full border border-black bg-pink-400 px-2 text-black">
            filmmaker
          </span>{' '}
          and all round a pretty creative fellah. Welcome to my portfolio. Grab
          a drink or a snack, take your time and enjoy!
        </h2>
        <section>
          <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
            My story
          </h2>
          <div className="text-1xl my-3 font-body">
            <p className="my-3">
              I've always loved problem solving. It's been the common thread
              throughout all of the different career paths I've taken. I enjoy
              trying things I've never tried before, jumping into projects and
              taking no issue in making mistakes.
            </p>
            <p className="my-3">
              Here's a GIF of me lituraly jumping into something I'd only been
              learning for an hour:
            </p>
            <img src="/images/about-page.gif" className="my-3 w-full" />
            <p className="my-3">
              If you're not convinced by that, in September 2022 I took another
              jump into something that I'd been wanting to tackel for years,
              coding. Throughout my different careers I've been interested in
              learning how to code but lack of time and fear of wasted time was
              a constant barrier faced.
            </p>
            <p className="my-3">
              After setting up a gardening business in January 2022 I was given
              a window in the winter period to set my tools aside and embarked
              on a journey into code through the School of Code bootcamp. Out of
              2000 applications, a rigorous interview process and the most
              intense 16 weeks of my life I can readily say that I'm feeling
              more than ready to begin a new career as a Software Developer.
            </p>
          </div>
        </section>
        <section>
          <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
            Work
          </h2>
          <ul className="text-1xl my-3 font-body">
            <li>➤ Business Owner || Rooted and Booted — Feb 2022-Present</li>
            <li>➤ Graphic Designer || Freelancer — 2015-Present</li>
            <li>➤ Gardener || The Dab Hand — 2019-Mar 2022</li>
            <li>
              ➤ Project Coordinator || London Business Partnership — 2020-May
              2021
            </li>
            <li>➤ Business Owner || Box.Din —2020</li>
            <li>➤ Lead Designer || Mediaplanet — 2018-2019</li>
            <li>➤ Designer || Springboard — 2016-2018</li>
            <li>
              ➤ Event photographer and filmmaker || Togada Studios — 2016-2018
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
            Education
          </h2>
          <ul className="text-1xl my-3 font-body">
            <li>➤ Coding Bootcamp || School of Code — Oct 2022-Feb2023</li>
            <li>
              ➤ First Class, Graphic Design BA Hons || Kingston University —
              2016-2019
            </li>
            <li>
              ➤ Art & Design Foundation Course || Sussex Downs Collage — 2014-
              2015
            </li>
          </ul>
        </section>
        <div>
          <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
            Tec Stack
          </h2>
          <ul className="my-3 flex flex-wrap gap-3">
            <Icon.Javascript />
            <Icon.Typescript />
            <Icon.Html />
            <Icon.Css />
            <Icon.Sql />
            <Icon.Miro />
            <Icon.Figma />
            <Icon.Photoshop />
            <Icon.Indesign />
            <Icon.Illustrator />
            <Icon.PremierePro />
            <Icon.AfterEffects />
            <Icon.Github />
            <Icon.ReactJs />
            <Icon.NextJs />
            <Icon.TailwindCss />
            <Icon.NodeJs />
            <Icon.ExpressJs />
            <Icon.Vite />
            <Icon.Npm />
            <Icon.Postman />
            <Icon.Netlify />
            <Icon.Render />
            <Icon.Jest />
            <Icon.Cypress />
            <Icon.TestingLibrary />
          </ul>
        </div>
        <section>
          <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
            Contact
          </h2>
          <ul className="text-1xl my-3 font-body">
            <li>
              ➤ Email || {''}
              <a href="mailto: kianeblackman@gmail.com">
                kianeblackman@gmail.com
              </a>
            </li>
            <li>
              ➤ GitHub || {''}
              <a href="https://github.com/kianeblackman">@kianeblackman</a>
            </li>
          </ul>
        </section>
      </section>
      <section className="ml-6"></section>
    </main>
  );
}
