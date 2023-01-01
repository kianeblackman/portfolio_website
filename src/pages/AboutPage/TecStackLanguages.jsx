import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
} from 'react-icons/si';

export default function TecStackLanguages() {
  return (
    <ul className="flex flex-wrap gap-3 pt-3">
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiJavascript className="pr-1 text-lg" />
        JAVASCRIPT
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiTypescript className="pr-1 text-lg" />
        TYPESCRIPT
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiHtml5 className="pr-1 text-lg" />
        HTML
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiCss3 className="pr-1 text-lg" />
        CSS
      </li>
      <li className="flex items-center border border-black p-1 font-head text-xs font-medium">
        <SiPostgresql className="pr-1 text-lg" />
        SQL
      </li>
    </ul>
  );
}
