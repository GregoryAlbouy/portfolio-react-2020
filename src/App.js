import React, { useState, useEffect } from 'react';
import {
  AppLoader,
  MainPage
} from './components';
import { getProjectsData } from './services/projects';
import { Utils } from './utils'

const App = () => {
  const loadApp = async () => {
    const tasks = [
      getProjectsData(),
      Utils.pause(1000)
    ]

    const projectsData = (await Promise.all(tasks))[0];

    setProjectsData(projectsData);
    setIsLoading(false);
  };

  const dismissLoader = () => {
    setTimeout(() => {
      setIsLoaderReadyForRemove(false)
    }, 1000);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderReadyForRemove, setIsLoaderReadyForRemove] = useState(true);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    loadApp();
  }, []);

  useEffect(() => {
    if (!isLoading) dismissLoader()
  }, [isLoading])
  
  // return isLoading ? <AppLoader /> : <MainPage projectsData={projectsData} />

  return (
    <>
      {isLoaderReadyForRemove ? <AppLoader className={isLoading ? '' : 'fade-out'} /> : ''}
      
      <MainPage projectsData={projectsData} />
    </>
  )
};

export default App;
