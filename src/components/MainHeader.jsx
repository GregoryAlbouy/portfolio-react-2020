import React from 'react';
import { Alert } from './';

const MainHeader = () => (
  <header className="c-main-header">
    <h1>
      <span>Grégory Albouy</span>
      <span className="subtitle">student Web developer @HETIC</span>
    </h1>

    <p>Fond of JavaScript environment, especially <strong>Webcomponents</strong> and <strong>Node.js</strong>.</p>
    <p>I enjoy <strong>solving problems</strong> and building things <strong>from scratch</strong>.</p>

    <Alert>
      <p>
        I am looking for a <strong>3-6 months internship</strong> in web development starting from July, preferably in <em>Full-Stack JavaScript</em>.
      </p>
      <ul>
        <li>
          <span role="img" aria-label="jsx-a11y/accessible-emoji">📄</span>&nbsp;
          Have a look at <strong><a href="https://gregoryalbouy.com/cv" title="my CV" target="_blank" rel="noopener noreferrer">my CV</a></strong>
        </li>
        <li>
          <span role="img" aria-label="jsx-a11y/accessible-emoji">⬇️</span>&nbsp;
          Check out my work below
        </li>
      </ul>
    </Alert>
  </header>
);

export default MainHeader;