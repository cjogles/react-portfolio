import React from 'react';

import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Gallery from './components/Gallery';
import Form from './components/Form';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography component={
            <Home />,
            <Project1 />,
            <Project2 />,
            <Gallery />,
            <Form />
            } 
            style={{ backgroundColor: '#cfe8fc', height: '100vh' }} 
            />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
