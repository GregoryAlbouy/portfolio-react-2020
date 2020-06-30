import React from 'react';

const AppLoader = ({ className }) => {
  return (
    <div className={`c-app-loader ${className}`}>
      <div className="container">
        <div className="loader">
          <div className="outer"></div>
          <div className="inner"></div>
        </div>
        
        <ul className="messages" data-ref="messages"></ul>
      </div>
    </div>
  );
};

export default AppLoader;