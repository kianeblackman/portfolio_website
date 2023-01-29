//* Description: Hobï project page

// Import statements
import React from "react";
import * as Icon from "../../../utils/TecStackIcons";

// Project component
export default function Hobï() {
  return (
    <div className="mx-6 mb-6 mt-16">
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        <img src="/images/hobï-fi-1.jpg" />
        <img src="/images/hobï-fi-2.jpg" />
        <img src="/images/hobï-fi-3.jpg" />
      </div>
      <div>
        <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
          Tec Stack
        </h2>
        <ul className="my-3 flex flex-wrap gap-3">
          <Icon.Javascript />
          <Icon.ReactJs />
          <Icon.NextJs />
          <Icon.TailwindCss />
          <Icon.MongoDb />
          <Icon.Jest />
        </ul>
      </div>
      <iframe
        className="aspect-video w-full md:w-3/4"
        src="https://www.youtube.com/embed/geaa1Okj7a0"
      ></iframe>
    </div>
  );
}
