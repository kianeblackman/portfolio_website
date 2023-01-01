// Description: This component is used to display the creative stack of technologies I use

// Imports
import React from 'react';
import {
  SiMiro,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from 'react-icons/si';

// File component
export default function TecStackCreative() {
  return (
    <ul className="flex flex-wrap gap-3 pt-3">
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiMiro className="pr-1 text-lg" />
        MIRO
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiFigma className="pr-1 text-lg" />
        FIGMA
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiAdobephotoshop className="pr-1 text-lg" />
        PHOTOSHOP
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiAdobeindesign className="pr-1 text-lg" />
        INDESIGN
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiAdobeillustrator className="pr-1 text-lg" />
        ILLUSTRATOR
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiAdobepremierepro className="pr-1 text-lg" />
        PREMIERE PRO
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiAdobeaftereffects className="pr-1 text-lg" />
        AFTER EFFECTS
      </li>
    </ul>
  );
}
