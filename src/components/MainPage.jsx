import React from 'react';
import {
  MainHeader,
  MainSection,
  MainFooter,
  ProjectList,
  ContactBox,
} from './';

const MainPage = (props) => (
  <>
    <MainHeader />

    <MainSection title="Projects" classNames="full-height dark">
      <ProjectList defaultList={props.projectsData}/>
    </MainSection>

    <MainSection title="Contact">
      <ContactBox />
    </MainSection>

    <MainFooter />
  </>
);

export default MainPage;