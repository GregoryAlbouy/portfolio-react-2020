import React from 'react';
import { Tag } from './';

const ProjectCard = (props) => {
  const {
    name,
    description,
    image,
    demo,
    repo,
    tags
  } = props.projectData

  return (
    <article className="c-project-card">
      <div className="img-container">
        {image ? <img src={image} alt={name}></img> : <span>no illustration</span>}

        <div className="overlay">
          {demo ? <a className="demo" href={demo} title={`${name} demo`} target="_blank" rel="noopener noreferrer">Try me!</a>: ''}
          {repo ? <a className="repo" href={repo} title={`${name} repo`} target="_blank" rel="noopener noreferrer">View repo</a>: ''}
        </div>
      </div>
      
      <div className="content">
          <h3>{name}</h3>
          <div className="slider">
            <p>{description}</p>
            <ul className="tag-list">
              {tags.map((tag, i) => (
                <li key={i}><Tag name={tag}/></li>
              ))}
            </ul>
          </div>
      </div>
    </article>
  );
};

export default ProjectCard;