import React from 'react';

const Alert = ({ classNames, children }) => (
  <aside className={`c-alert ${classNames || ''}`}>
    {children}
  </aside>
);

export default Alert;