// components/organisms/Section.js
import React from 'react';

function Section({ title, children }) {
  return (
    <div className="section font-bold">
      <div className="container baris">
        <p>{title}</p>
        <p>See all</p>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Section;
