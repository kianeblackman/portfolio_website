//* Description: Hobi project page

// Import statements
import React from "react";
import * as Icon from "../../../utils/TecStackIcons";
import { SiGithub } from "react-icons/si";

// Project component
export default function Hobi() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Hobï
      </h1>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        A community app where you can learn and teach new skills and hobbies.
      </h2>
      <p className="my-3 font-body font-light md:w-3/4">
        Struggling to learn a new skill? Want to get more people involved in
        your hobby? Hobï lets your connect with your local community to learn
        and teach new skills and hobbies.
      </p>
      <p className="my-3 font-body text-xl font-light md:w-3/4">
        View the app{" "}
        <a
          href="https://main.d2wcmuqqs91fni.amplifyapp.com/"
          className="underline"
        >
          here
        </a>{" "}
        or check out the code on{" "}
        <a
          href="https://github.com/SchoolOfCode/bc13_final-project_front-end-zen-coders"
          className="underline"
        >
          GitHub
        </a>
        .
      </p>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Final Presentation
      </h2>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://www.youtube.com/embed/geaa1Okj7a0"
      ></iframe>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        App Journey
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        The brief for this project was simple, in a team of 6 create an app in
        four weeks that solves a problem. We began by brainstorming ideas and we
        eventually decided to create an app that would connect hobby enthusiasts
        with each other, enabling them to share their passions, learn new
        skills, and build relationships with like-minded individuals.
      </p>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Over the next few weeks, the team worked tirelessly, dividing the tasks
        and using agile methodologies to ensure that the project was moving
        forward efficiently. Each team member brought their unique skills and
        experience to the table, which resulted in a well-rounded and
        comprehensive solution. By the end of the fourth week, the team had
        successfully completed the project, delivering a polished and functional
        application.
      </p>
      <h3 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Design
      </h3>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        In early discussions, we determined that we wanted to make our app as
        accessible as possible. From using limited and contrasting colours, to
        simple fonts for readability, and rounded corners for an
        smooth-on-the-eyes user experience.
      </p>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        When designing our wireframes we made sure to include as few shapes as
        possible, ensuring that the app was easy to navigate.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:w-3/4 md:grid-cols-2">
        <img src="/images/hobi/hobi-fi-1.jpg" />
        <img src="/images/hobi/hobi-fi-2.jpg" />
      </div>
      <img src="/images/hobi/hobi-fi-3.jpg" className="my-6 md:w-3/4" />
      <div>
        <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
          Tec Stack
        </h2>
        <p className="text-1xl my-3 font-body font-light md:w-3/4">
          For the front end, we used Next.js as our meta-framework, utilising
          its page navigation system, server-side-props, and dynamic rendering
          of pages. For styling, we used Tailwind, which allowed us to create
          fast designs without the need to create a design system ourselves.
          Finally, we used Auth0 for all security concerns.
        </p>
        <p className="text-1xl my-3 font-body font-light md:w-3/4">
          On the backend, as we didn't know how far our product would expand, it
          was clear that we might have a lot of unstructured data. We decided to
          use MongoDB as our database due to its high performance and
          flexibility.
        </p>
        <ul className="my-3 flex flex-wrap gap-3 md:w-3/4">
          <Icon.Javascript />
          <Icon.ReactJs />
          <Icon.NextJs />
          <Icon.TailwindCss />
          <Icon.Auth0 />
          <Icon.MongoDb />
          <Icon.Jest />
        </ul>
      </div>
      <h3 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Additional features
      </h3>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Due to the short deadline of only 4 weeks, we had to ensure that we were
        able to deliver a functioning MVP. This meant that key features that we
        wanted to bring to our app had to be shelved to meet the deadline.
      </p>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Our app in still in production and these are just some of the additional
        features we'd like to add.
        <ol>
          <li className="m-3">
            - Rating: giving users the ability to rate Skill Sharers.
          </li>
          <li className="m-3">
            - In App Comunication: making sure that we keep users within the app
            we want to include in app messaging for Users and Sharers to contact
            one and other.
          </li>
          <li className="m-3">
            - Filtering: expand our filtering to include location filtering,
            implementing map functionality so that users would be able to search
            specifically in the areas of interest.
          </li>
        </ol>
      </p>
    </div>
  );
}
