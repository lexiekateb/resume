import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { resumeItems, skillItems, researchItems, papers } from './data.tsx';
import ResearchSection from './components/research/index.tsx';
import ResumeSection from './components/resume/index.tsx';
import Intro from './components/intro/index.tsx';
import Paper from './components/papers/index.tsx';
import Contact from './components/contact/index.tsx';
import AboutMe from './components/aboutMe/index.tsx';
import Header from './components/header/index.tsx';
import Blog from './pages/Blog'; // You'll create this next

function MainPage() {
  return (
    <>
      <Header />
      <div className='section'>
        <Intro />
        <AboutMe skillItems={skillItems} />
        <ResearchSection researchItems={researchItems} />
        <Paper papers={papers} />
        {/* <ResumeSection resumeItems={resumeItems} /> */}
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;