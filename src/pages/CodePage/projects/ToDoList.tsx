//* Description: To-do List project page

// Import statements
import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

export default function ToDoList() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        To-do List
      </h1>
      <h2 className='my-3 font-body text-xl font-light md:text-2xl'>
        A super cool to-do list app.
      </h2>
      <p className='my-3 font-body font-light md:w-3/4'>
        This is a to-do list application developed in React. The app was
        designed to be simple, user-friendly, and efficient, making it easy for
        users to manage their daily tasks.
      </p>
      <p className='my-3 font-body text-xl font-light md:w-3/4'>
        View the app code on{' '}
        <a
          href='https://github.com/kianeblackman/to_do_list'
          className='underline'
        >
          GitHub
        </a>
        .
      </p>
      <img
        src='/images/to-do-list/demo.gif'
        alt='app demo GIF'
        className='border-2 border-black md:w-3/4'
      />
      <h2 className='font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto'>
        Tec Stack
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        The app was my first introduction into React, and I used it to learn the
        basics of state management and component design.
      </p>
      <ul className='my-3 flex flex-wrap gap-3 md:w-3/4'>
        <Icon.Javascript />
        <Icon.ReactJs />
        <Icon.Css />
      </ul>
      <h3 className='font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto'>
        Additional features
      </h3>
      <p className='my-3 font-body font-light md:w-3/4'>
        The app was developed early in my coding journey, and I am currently
        working on a new version of the app that will be more user-friendly and
        have more features such as:
        <ol className='ml-6 list-disc'>
          <li className='my-1'>Adding a task due date</li>
          <li className='my-1'>Sorting tasks by date</li>
          <li className='my-1'>Filtering tasks by status</li>
          <li className='my-1'>Adding user login using Auth0</li>
          <li className='my-1'>Adding a database to store user data</li>
        </ol>
      </p>
    </div>
  );
}
