import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`flex flex-col justify-center items-center p-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}  
    </section>
  );
};

export default Section;