import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    whiteSpace: 'nowrap',
  },
  familyH2: {
    fontSize: '3rem',
    fontFamily: 'Wendy One, Sans-serif',
  },
  familyP: {
    fontSize: '1.5rem',
    fontFamily: 'Lato, sans-serif',
  }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <div className="cardEven">
            <div className="cardContent">
                <div className="innerCardContent">
                    <h1 className={classes.familyH1}>Jackson Ogles</h1>
                    <p className={classes.familyP}> 
                        My ikigai ('aye-kee-guy') is centered 
                        in coding simple and beautiful things.
                        I love what I do!
                    </p>
                    <p id="emoji">🛌 ➡ 🕺</p>
                    <Button variant="contained" href="#firstProject" className={classes.button}>
                        View Projects
                    </Button>
                    <Button variant="contained" href="https://sourcerer.io/cjogles" className={classes.button}>
                        Check Out my Stats!
                    </Button>
                </div>
            </div>
            <div className="imageContent">
                <a 
                    href="https://en.wikipedia.org/wiki/Ikigai" 
                    target="_blank"
                >
                    <img 
                        className="cardImage"
                        src="images/ikigai.jpg" 
                        alt="ikigai = a japanese word/notion for life meaning being found" 
                    />
                </a>
            </div>
        </div>
        <div id="firstProject"></div>
        </>
    )
}

export default Home;