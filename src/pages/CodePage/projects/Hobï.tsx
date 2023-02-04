//* Description: Hobï project page

// Import statements
import React from "react";
import * as Icon from "../../../utils/TecStackIcons";

// Project component
export default function Hobï() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        Hobï
      </h1>
      <h2 className="text-1xl my-3 font-body font-light md:text-2xl">
        A community app where you can learn and teach new skills and hobbies.
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        Struggling to learn a new skill? Want to get more people involved in
        your hobby? Hobï lets your connect with your local community to learn
        and teach new skills and hobbies.
      </p>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        App Journey
      </h2>
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
      <div className="grid gap-6 sm:grid-cols-1 md:w-3/4 md:grid-cols-3">
        <img src="/images/hobï-fi-1.jpg" />
        <img src="/images/hobï-fi-2.jpg" />
        <img src="/images/hobï-fi-3.jpg" />
      </div>
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
        <ul className="my-3 flex flex-wrap gap-3">
          <Icon.Javascript />
          <Icon.ReactJs />
          <Icon.NextJs />
          <Icon.TailwindCss />
          <Icon.Auth0 />
          <Icon.MongoDb />
          <Icon.Jest />
        </ul>
      </div>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Final Presentation
      </h2>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://www.youtube.com/embed/geaa1Okj7a0"
      ></iframe>
    </div>
  );
}
