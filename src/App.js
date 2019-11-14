import React from 'react';

import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="lg">
          <Typography component={'div'} style={{ backgroundColor: 'whitesmoke', height: '100%' }}>
            <Home />
            <Project1 />
            <Project2 />
            <Gallery />
            <Skills />
            <ContactForm />
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
