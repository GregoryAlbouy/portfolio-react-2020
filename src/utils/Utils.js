const Utils = {
  getUniqueTagList(projectList) {
    const tagList = projectList.reduce((acc, curr) => [...acc, ...curr.tags], projectList[0].tags);
    const tagSet = new Set(tagList);
    return [...tagSet]
  },

  filterByTagList(projectList, tagList) {
    return projectList.filter((project) => {
      return tagList.reduce((acc, curr) => {
        return acc && project.tags.includes(curr) // Current projeet has all tags in tagList
      }, true);
    });
  },

  pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  } 
}

export default Utils;