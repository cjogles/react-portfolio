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

const Project2 = () => {
    const classes = useStyles();
    return (
        <>
        <div className="cardEven">
            <div className="cardContent">
                <div className="innerCardContent">
                    <h2>Car Sales</h2>
                    <p>
                        Created a redux state management system for a car sales website. Implemented
                        action creators, actions, reducers and redux store for pure state management. 
                        Included event handlers to modify UI and reducer logic to update car price
                        according to added features or removed features to be purchased by client.
                    </p>
                    <div>
                        <div>
                            <Button variant="contained" className={classes.button} href="https://cjogles.github.io/Car-Sales/" target="_blank">
                                View Website
                            </Button>
                            <Button variant="contained" className={classes.button} href="https://github.com/cjogles/Car-Sales" target="_blank">
                                View Code
                            </Button>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="imageContent">
                <img 
                    className="cardImage" 
                    src="images/car-sales.jpg" 
                    alt="screenshot of car-sales website home page"
                />
            </div>
        </div>
        </>
    )
}

export default Project2;