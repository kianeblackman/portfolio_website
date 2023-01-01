import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-auto decoration-wavy decoration-indigo-500">
        Contact
      </h2>
      <ul className="text-1xl  font-body">
        <li>
          ➤ Email || {''}
          <a href="mailto: kianeblackman@gmail.com">kianeblackman@gmail.com</a>
        </li>
        <li>
          ➤ GitHub || {''}
          <a href="https://github.com/kianeblackman">@kianeblackman</a>
        </li>
      </ul>
    </div>
  );
}
