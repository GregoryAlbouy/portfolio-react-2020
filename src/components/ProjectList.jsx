import React, { useState, useEffect } from 'react';
import {
  FilterBox,
  ProjectCard,
  Alert
} from './';
import {
  Check,
  Utils
} from '../utils';

const ProjectList = ({ defaultList }) => {

  const applyFilters = (filters) => {
    const filterDefaultList = () => Utils.filterByTagList(defaultList, filters);

    const updatedList = !filters.length ? defaultList : filterDefaultList();
  
    if (Check.areEqualArrays(currentList, updatedList)) return;
    setCurrentList(updatedList);
  };

  const clearFilters = () => {
    // force FilterBox component reset
    setFilterBoxKey(filterBoxKey + 1)
  };

  const renderError = () => (
    <Alert className="error">
      <p>Problem fetching projects data. Please try again later.</p>
    </Alert>
  );

  const renderEmpty = () => (
    <li className="empty">
      <h4>No more matches :(</h4>
      <button className="c-tag-button" onClick={clearFilters}>Clear filters</button>
    </li>
  );

  const renderContent = () => (
    currentList.map((project, i) => (
      <li key={i}><ProjectCard projectData={project} /></li>
    ))
  );

  const [filterBoxKey, setFilterBoxKey] = useState(0);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    if (defaultList) setCurrentList(defaultList);
  }, [defaultList]);

  return !defaultList.length ? renderError() : (
    <>
      <FilterBox
        key={filterBoxKey}
        filterList={Utils.getUniqueTagList(defaultList)}
        applyFilters={applyFilters}
      />

      <ul className="c-project-list">
        {!currentList.length ? renderEmpty() : renderContent()}
      </ul>
    </>
  );
};

export default ProjectList;