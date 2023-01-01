import React from 'react';
import * as Icon from '../../assets/TecStackIcons';

export default function TecStack() {
  return (
    <div>
      <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-4">
        Tec Stack:
      </h2>
      <h3>Languages</h3>
      <ul className="flex flex-wrap gap-3 pt-3">
        <Icon.Javascript />
        <Icon.Typescript />
        <Icon.Html />
        <Icon.Css />
        <Icon.Sql />
      </ul>
      <h3>Creative</h3>
      <ul className="flex flex-wrap gap-3 pt-3">
        <Icon.Miro />
        <Icon.Figma />
        <Icon.Photoshop />
        <Icon.Indesign />
        <Icon.Illustrator />
        <Icon.PremierePro />
        <Icon.AfterEffects />
      </ul>
      <h3>Other</h3>
      <ul className="flex flex-wrap gap-3 pt-3">
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
