// Description: About page

// Imports
import TecStackLanguages from './TecStackLanguages';
import TecStackCreative from './TecStackCreative';
import TecStackOther from './TecStackOther';

// AboutPage component
export default function AboutPage() {
  return (
    <div className="p-6 pt-16">
      <div className="w-full xs:w-3/4">
        <h1 className="pb-3 font-head text-4xl font-bold text-neutral-800 xs:text-7xl">
          Hello, I'm Kiane Blackman
        </h1>
        <h2 className="text-1xl font-body font-light xs:text-2xl">
          I’m a{' '}
          <span className="rounded-full border border-black px-2 text-black">
            developer
          </span>{' '}
          <span className="rounded-full border border-black px-2 text-black">
            designer
          </span>{' '}
          <span className="rounded-full border border-black px-2 text-black">
            filmmaker
          </span>{' '}
          and all round a pretty creative fellah. Welcome to my portfolio. Grab
          a drink or a snack, take your time and enjoy!
        </h2>
      </div>
      <br></br>
      <div className="xs:w-1/2">
        <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
          My story:
        </h2>
        <h3 className="text-1xl font-body">
          I’ve always loved problem solving. It’s been the common thread
          throughout all of the different career paths I’ve taken. I enjoy
          trying things I’ve never tried before, jumping into projects and
          taking no issue in making mistakes.
          <br></br>
          <br></br>
          Here’s a video of me lituraly jumping into something I’d only been
          learning for an hour:<br></br>
          <br></br>
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/kf4WRWkapfk"
          ></iframe>
          <br></br>
          If you’re not convinced by that, in September 2022 I took another jump
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
        <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
          Work:
        </h2>
        <ul className="text-1xl font-body">
          <li>➤ Business Owner || Rooted and Booted — Feb 2022-Present</li>
          <li>➤ Graphic Designer || Freelancer — 2015-Present</li>
          <li>➤ Gardener || The Dab Hand — 2019-Mar 2022</li>
          <li>
            ➤ Project Coordinator || London Business Partnership — 2020-May 2021
          </li>
          <li>➤ Business Owner || Box.Din —2020</li>
          <li>➤ Lead Designer || Mediaplanet — 2018-2019</li>
          <li>➤ Designer || Springboard — 2016-2018</li>
          <li>
            ➤ Event photographer and filmmaker || Togada Studios — 2016-2018
          </li>
        </ul>
        <br></br>
        <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
          Tec Stack:
        </h2>
        <h3>Languages</h3>
        <TecStackLanguages />
        <h3>Languages</h3>
        <TecStackCreative />
        <h3>Languages</h3>
        <TecStackOther />
        <br></br>
        <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
          Education:
        </h2>
        <ul className="text-1xl font-body">
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
        <br></br>
        <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
          Contact:
        </h2>
        <ul className="text-1xl  font-body">
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
      </div>
    </div>
  );
}
