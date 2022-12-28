// Description: About page

// Imports
import TecStack from './TecStack';

// AboutPage component
export default function AboutPage() {
  return (
    <div className="p-6 pt-16">
      <div className="w-full xs:w-3/4">
        <h1 className="pb-3 font-head text-5xl font-bold xs:text-7xl">
          Hello, I'm Kiane Blackman
        </h1>
        <h2 className="font-merry text-2xl font-light xs:text-3xl">
          I’m a{' '}
          <span className="rounded-full border-2 border-dashed border-red-500 px-1">
            developer
          </span>
          ,{' '}
          <span className="rounded-full border-2 border-dashed border-blue-500 px-1">
            designer
          </span>
          ,{' '}
          <span className="rounded-full border-2 border-dashed border-green-500 px-1">
            filmmaker
          </span>{' '}
          and all round a pretty creative fellah. Welcome to my portfolio. Grab
          a drink or a snack, take your time and enjoy!
        </h2>
      </div>
      <br></br>
      <div className="xs:w-1/2">
        <h2 className="pb-3 font-merry text-4xl underline">My story:</h2>
        <h3 className="font-merry text-lg font-light">
          I’ve always loved problem solving. It’s been the common thread
          throughout all of the different career paths I’ve taken. I enjoy
          trying things I’ve never tried before, jumping into projects and
          taking no issue in making mistakes.
          <br></br>
          <br></br>
          Here’s a video of me lituraly jumping into something I’d only been
          learning for an hour ↘<br></br>
          <br></br>
          <iframe
            className="aspect-video w-full"
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
        <h2 className="pb-3 font-merry text-4xl underline">Work:</h2>
        <ul className="font-merry text-lg font-light">
          <li>
            <span className="font-head font-semibold">Business Owner</span> ||
            Rooted and Booted <sup>Feb 2022-Present</sup>
          </li>
          <li>
            <span className="font-head font-semibold"> Graphic Designer</span>{' '}
            || Freelancer <sup>2015-Present</sup>
          </li>
          <li>
            <span className="font-head font-semibold">Gardener</span> || The Dab
            Hand <sup>2019-Mar 2022</sup>
          </li>
          <li>
            <span className="font-head font-semibold">Project Coordinator</span>{' '}
            || London Business Partnership <sup>2020-May 2021</sup>
          </li>
          <li>
            <span className="font-head font-semibold">Business Owner</span> ||
            Box.Din <sup>2020</sup>
          </li>
          <li>
            <span className="font-head font-semibold">Lead Designer</span> ||
            Mediaplanet <sup>2018-Nov 2019</sup>
          </li>
          <li>
            <span className="font-head font-semibold">Designer</span> ||
            Springboard <sup>2016-2018</sup>
          </li>
          <li>
            <span className="font-head font-semibold">
              Event photographer and filmmaker
            </span>{' '}
            || Togada Studios <sup>2016-2018</sup>
          </li>
        </ul>
        <br></br>
        <TecStack />
        <br></br>
        <h2 className="pb-3 font-merry text-4xl underline">Education:</h2>
        <ul className="font-merry text-lg font-light">
          <li>
            <span className="font-head font-semibold">Coding Bootcamp</span> ||
            School of Code <sup>Oct 2022-Feb2023</sup>
          </li>
          <li>
            <span className="font-head font-semibold">
              First Class, Graphic Design BA Hons
            </span>{' '}
            || Kingston University <sup>2016-2019</sup>
          </li>
          <li>
            <span className="font-head font-semibold">
              Art & Design Foundation Course
            </span>{' '}
            || Sussex Downs Collage <sup>2014- 2015</sup>
          </li>
        </ul>
        <br></br>
        <h2 className="pb-3 font-merry text-4xl underline">Contact</h2>
        <ul className="text-xl">
          <li>Softwear Developer</li>
          <li>
            <a href="mailto: kianeblackman@gmail.com">
              kianeblackman@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/kianeblackman">@kianeblackman</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
