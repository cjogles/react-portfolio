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
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  familyH1: {
    fontSize: '5rem',
    fontFamily: 'Wendy One, Sans-serif',
  }, 
  familyH2: {
    fontSize: '4rem',
    fontFamily: 'Wendy One, Sans-serif',
  },
  familyP: {
    fontSize: '2rem',
    fontWeight: 'light',
    fontFamily: 'Wendy One, sans-serif',
  }
}));
function App() {
  const classes = useStyles();
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
            <br></br>
            <Skills />
            <br></br>
            <ContactForm />
            <p className={classes.familyP}style={{textAlign:'center', fontSize:'1rem'}}>© Photos Unsplash and Personal Projects - Jackson Ogles</p>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
