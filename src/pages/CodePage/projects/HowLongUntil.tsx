//* Description: How Long Until project page

// Import statements
import React from "react";
import * as Icon from "../../../utils/TecStackIcons";

export default function HowLongUntil() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        How Long Until
      </h1>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        An app that calculates the time remaining until a user-specified date in
        days, hours, minutes, and seconds.
      </h2>
      <p className="my-3 font-body font-light md:w-3/4">
        How Long Until is a user-friendly app that helps you keep track of the
        time left until your special moments. Simply enter the date of your
        event, and the app will calculate the exact days, hours, minutes, and
        seconds until that day arrives.
      </p>
      <p className="my-3 font-body font-light md:w-3/4">
        Designed to create excitement and anticipation for your upcoming events,
        How Long Until makes counting down to your big day a breeze. With plans
        to add additional features such as creating your own account and
        managing a list of events, How Long Until will be your go-to source for
        event counting down.
      </p>
      <h2 className="font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto">
        Tec Stack
      </h2>
      <p className="text-1xl my-3 font-body font-light md:w-3/4">
        My first side project created early in my journey as a developer. The
        app was made before I was introduced into Frameworks such as React and
        so is built using vanilla JavaScript and HTML/CSS.
      </p>
      <ul className="my-3 flex flex-wrap gap-3 md:w-3/4">
        <Icon.Html />
        <Icon.Javascript />
        <Icon.Css />
      </ul>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        Rest of page in build...
      </h2>
    </div>
  );
}
