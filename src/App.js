import './App.css';
import React from 'react';
import { resumeItems, skillItems, researchItems } from './data.tsx';
import ResearchSection from './components/research/index.tsx';
import ResumeSection from './components/resume/index.tsx';
import Intro from './components/intro/index.tsx';
import Contact from './components/contact/index.tsx';
import AboutMe from './components/aboutMe/index.tsx';
import Header from './components/header/index.tsx';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='section'>
        <Intro/>
        <AboutMe skillItems={skillItems}/>
        <ResearchSection researchItems={researchItems}/>
        <ResumeSection resumeItems={resumeItems}/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
