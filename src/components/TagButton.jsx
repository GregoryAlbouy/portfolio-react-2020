import React, { useState } from 'react';

const TagButton = (props) => {
  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick()
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`c-tag-button ${isActive ? 'is-active' : ''}`}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
};

export default TagButton;