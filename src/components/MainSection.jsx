import React from 'react';

const MainSection = ({ title, children, classNames }) => {
  return (
    <section className={`c-main-section ${classNames || ''}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default MainSection;