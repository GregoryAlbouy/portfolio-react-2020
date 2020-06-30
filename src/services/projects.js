const BASE_URL = process.env['REACT_APP_REMOTE_API_BASE_URL'];
const PROJECTS_PATH = '/api/v1/projects';
const PROJECTS_URL = BASE_URL + PROJECTS_PATH;

export const getProjectsData = async () => {
  try {
    const response = await fetch(PROJECTS_URL);

    if (!response.ok) throw new Error('Projects data could not be loaded. Please try again later.');

    const projectsData = await response.json();

    return projectsData;
  } catch(error) {
    console.warn(error);
  }
};