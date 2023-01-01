import React from 'react';
import * as Icon from '../../../utils/TecStackIcons';

export default function TecStack() {
  return (
    <div>
      <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-auto decoration-wavy">
        Tec Stack
      </h2>
      <ul className="flex flex-wrap pb-3 gap-3">
        <Icon.Javascript />
        <Icon.Typescript />
        <Icon.Html />
        <Icon.Css />
        <Icon.Sql />
        <Icon.Miro />
        <Icon.Figma />
        <Icon.Photoshop />
        <Icon.Indesign />
        <Icon.Illustrator />
        <Icon.PremierePro />
        <Icon.AfterEffects />
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
