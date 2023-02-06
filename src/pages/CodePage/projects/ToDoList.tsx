//* Description: To-do List project page

// Import statements
import React from "react";

export default function ToDoList() {
  return (
    <div className="mx-6 mb-6 mt-16 md:w-3/4">
      <h1 className="my-3 font-head text-4xl font-bold text-black md:text-6xl">
        To-do List
      </h1>
      <h2 className="my-3 font-body text-xl font-light md:text-2xl">
        A super cool to-do list app.
      </h2>
      <p className="my-3 font-body font-light md:w-3/4">
        This is a to-do list application developed in React. The app was
        designed to be simple, user-friendly, and efficient, making it easy for
        users to manage their daily tasks.
      </p>
      <p className="my-3 font-body text-xl font-light md:w-3/4">
        View the app code on{" "}
        <a
          href="https://github.com/kianeblackman/to_do_list"
          className="underline"
        >
          GitHub
        </a>
        .
      </p>
      <img
        src="/images/to-do-list/demo.gif"
        alt="app demo GIF"
        className="md:w-3/4"
      />
      <p className="my-3 font-body font-light md:w-3/4">
        The app was developed early in my coding journey, and I am currently
        working on a new version of the app that will be more user-friendly and
        have more features such as:
        <ol className="ml-6 list-disc">
          <li className="my-1">Adding a task due date</li>
          <li className="my-1">Sorting tasks by date</li>
          <li className="my-1">Filtering tasks by status</li>
          <li className="my-1">Adding user login using Auth0</li>
          <li className="my-1">Adding a database to store user data</li>
        </ol>
      </p>
    </div>
  );
}
