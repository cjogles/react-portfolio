import React from 'react';

import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Gallery from './components/Gallery';
import Form from './components/Form';
import Skills from './components/Skills';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography component={'div'} style={{ backgroundColor: 'whitesmoke', height: '100%' }}>
            <Home />
            <Project1 />
            <Project2 />
            <Gallery />
            <Skills />
            <Form />
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
