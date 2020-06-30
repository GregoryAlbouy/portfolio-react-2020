import React, { useState, useEffect } from 'react';
import { TagButton } from './';

const FilterBox = ({ filterList, applyFilters }) => {
  const handleFilterChange = (filterName) => {
    const updatedFilters = activeFilters.includes(filterName)
      ? activeFilters.filter((filter) => filter !== filterName)
      : [...activeFilters, filterName];

    setActiveFilters(updatedFilters);
  };

  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    applyFilters(activeFilters);
  }, [activeFilters, applyFilters]);

  return (
    <ul className="c-filter-box">
      {filterList.map((filterName, i) => (
        <li key={i}>
          <TagButton name={filterName} onClick={() => handleFilterChange(filterName)} />
        </li>
      ))}
    </ul>
  );
};

export default FilterBox;