import React from 'react';
import Button from '@material-ui/core/Button';
import '../src/css/index.css';

import Project1 from './components/Project1';

function App() {
  return (
    <>
      <div className="home-page">
        <div className ="title">
          <h1>Hi! My name is Jackson and I'm a Web Developer. </h1>
          <div className="buttons">
            <Button variant="contained" color="primary">
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
    </>
  );
}

export default App;
