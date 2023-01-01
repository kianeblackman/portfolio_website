import React from 'react';

export default function Icons(icon) {
  return (
    <div className="flex items-center border border-black p-1 font-head text-xs font-medium">
      <{...icon} className="pr-1 text-lg" />
      PHOTOSHOP
    </div>
  );
}
