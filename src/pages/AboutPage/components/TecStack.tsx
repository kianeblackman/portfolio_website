import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

export default function TecStack() {
  return (
    <div>
      <h2 className="font-regular font-head pb-2 text-2xl underline underline-offset-4">
        Tec Stack:
      </h2>
      <h3 className='font-head font-regular pb-1'>Languages -</h3>
      <ul className="flex flex-wrap pb-3 gap-3">
        <Icon.Javascript />
        <Icon.Typescript />
        <Icon.Html />
        <Icon.Css />
        <Icon.Sql />
      </ul>
      <h3 className='font-head font-regular pb-1'>Creative -</h3>
      <ul className="flex flex-wrap pb-3 gap-3">
        <Icon.Miro />
        <Icon.Figma />
        <Icon.Photoshop />
        <Icon.Indesign />
        <Icon.Illustrator />
        <Icon.PremierePro />
        <Icon.AfterEffects />
      </ul>
      <h3 className='font-head font-regular pb-1'>Other -</h3>
      <ul className="flex flex-wrap gap-3">
        <Icon.Github />
        <Icon.ReactJs />
        <Icon.NextJs />
        <Icon.TailwindCss />
        <Icon.NodeJs />
        <Icon.ExpressJs />
        <Icon.Vite />
        <Icon.Npm />
        <Icon.Postman />
        <Icon.Netlify />
        <Icon.Render />
        <Icon.Jest />
        <Icon.Cypress />
        <Icon.TestingLibrary />
      </ul>
    </div>
  );
}
