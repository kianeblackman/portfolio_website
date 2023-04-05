//* Description: To-do List project page

// Import statements
import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

export default function ToDoList() {
  return (
    <div className='mx-6 mb-6 mt-16 md:w-3/4'>
      <h1 className='my-3 font-head text-4xl font-bold text-black md:text-6xl'>
        Pizza Shark
      </h1>
      <h2 className='my-3 font-body text-xl font-light md:text-2xl'>
        Pizza Shark - where the only thing sharper than our teeth is our taste
        in pizza!
      </h2>
      <p className='my-3 font-body font-light md:w-3/4'>
        The idea behind this project was to create a mock pizzaria website that
        captures the playful nature of a pizzeria I wouldn't hesitate to eat at
        while also delivering a user-friendly experience.
      </p>
      <p className='my-3 font-body font-light md:w-3/4'>
        Currently, the project is still a work in progress, but I'm excited to
        continue adding features and functionality to make Pizza Shark even more
        awesome.
      </p>
      <p className='my-3 font-body font-light md:w-3/4'>
        I'll also be implementing testing using Vitest and Cypress to ensure
        that the website is running smoothly and providing the best possible
        user experience. Stay tuned for updates on the progress of Pizza Shark,
        and thank you for checking out my project!
      </p>
      <p className='my-3 font-body text-xl font-light md:w-3/4'>
        View the app{' '}
        <a href='https://pizza-shark.netlify.app/' className='underline'>
          here
        </a>{' '}
        or check out the code on{' '}
        <a
          href='https://github.com/kianeblackman/pizza-shark/blob/main/README.md'
          className='underline'
        >
          GitHub
        </a>
        .
      </p>
      {/* Main Features */}
      <h2 className='font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto'>
        Main Features
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Although in it's early stages, Pizza Shark boasts several key features
        that make it a unique and enjoyable website for users.
      </p>
      <img
        src='/images/pizza-shark/home.gif'
        alt='app demo GIF'
        className='md:w-3/4 border-2 border-black'
      />
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Dynamic label: A label that flies across the screen using keyframes,
        displaying whether the restaurant is open or closed. The label's text
        changes automatically based on the restaurant's opening hours, switching
        from "We're Open" to "We're Closed" as necessary.
      </p>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Reviews carousel: A visually appealing carousel that displays selected
        reviews for the restaurant, allowing potential customers to see what
        others have enjoyed about Pizza Shark.
      </p>
      <img
        src='/images/pizza-shark/menu.gif'
        alt='app demo GIF'
        className='md:w-3/4 border-2 border-black'
      />
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        Menu page: A menu page that provides a comprehensive list of items for
        Snacks, Pizzas, Drinks, and Desserts. The data for these items is taken
        from a local JSON file, which is easily maintainable and scalable. I
        used the map function to auto-generate the list of cards to display the
        menu, providing a smooth and responsive user experience. The cards also
        include great use of Scss, including grid, hover effects, and
        animations. Future implementation: Store the JSON data in a database for
        better scalability and data management.
      </p>
      {/* Tec Stack */}
      <h2 className='font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto'>
        Tec Stack
      </h2>
      <p className='text-1xl my-3 font-body font-light md:w-3/4'>
        The app was my first introduction into Sass. I used Sass to write more
        efficient and maintainable CSS code. By utilizing variables for colors
        and typography, I could quickly make global changes to the design
        without having to manually update every instance of a style in the CSS.
        Additionally, Sass allowed me to use nesting to organize my CSS rules
        and make it easier to understand the hierarchy of the styles.
      </p>
      <ul className='my-3 flex flex-wrap gap-3 md:w-3/4'>
        <Icon.Javascript />
        <Icon.ReactJs />
        <Icon.Vite />
        <Icon.Sass />
      </ul>
      {/* Additional features */}
      <h3 className='font-regular my-3 font-head text-2xl underline decoration-wavy underline-offset-auto'>
        Additional features
      </h3>
      <p className='my-3 font-body font-light md:w-3/4'>
        In addition to its playful design and intuitive user experience, Pizza
        Shark has several additional features that I'd like to include down the
        line to make it an even more enjoyable and functional website:
        <ol className='ml-6 list-disc'>
          <li className='my-1'>
            E-commerce functionality: users can order pizzas online and checkout
            securely
          </li>
          <li className='my-1'>
            Responsive design: optimize the website's layout for various screen
            sizes and devices
          </li>
          <li className='my-1'>
            Dark mode: a toggle that allows users to switch between light and
            dark mode for a personalized experience
          </li>
          <li className='my-1'>
            Testing implementation: using Vitest and Cypress to ensure the
            website is running smoothly and providing the best possible user
            experience
          </li>
          <li className='my-1'>
            Integration with social media platforms: allowing users to share
            their favorite pizzas or order history on social media
          </li>
          <li className='my-1'>
            Pizza customization: a feature that allows users to build their own
            pizza by selecting toppings, crusts, and sauces
          </li>
          <li className='my-1'>
            Order tracking: enabling users to track their order status and
            delivery time in real-time
          </li>
        </ol>
      </p>
    </div>
  );
}
