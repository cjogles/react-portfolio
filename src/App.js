import React from 'react';
import Button from '@material-ui/core/Button';
import '../src/css/index.css';

import NavBar from './components/NavBar';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    <>
      <NavBar/>
      <div className="home-page">
        <div className ="title">
          <h1>Hi! My name is Jackson and I'm a Web Developer. </h1>
          <div className="buttons">
            <Button variant="contained" color="primary" href="https://sourcerer.io/cjogles" target="_blank">
              View Github Stats
            </Button>
            <Button variant="contained" color="primary" href="#firstProject">
              View Projects
            </Button>
          </div>
        </div>
        <img src='/images/hi-right.JPG'/>
      </div>
      <Project1/>
      <Project2/>
      <Project3/>
    </>
  );
}

export default App;
