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
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <div className="cardEven">
            <div className="cardContent">
                <div className="innerCardContent">
                    <h1>Jackson Ogles</h1>
                    <p> 
                        My ikigai (pronounced "aye-kee-guy") is centered 
                        in software engineering principles and using them in a practical way.
                        You could say it's the reason I get up in the morning!
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