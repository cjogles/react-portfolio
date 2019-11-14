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

const Project1 = () => {
    const classes = useStyles();
    return (
        <>
        <div className="cardOdd">
            <div className="imageContent">
                <img 
                    className="cardImage" 
                    src="images/block-club.jpg" 
                    alt="screenshot of block-club calendar website home page"
                />
            </div>
            <div className="cardContent">
                <div className="innerCardContent">
                    <h2>Block Club Calendar</h2>
                    <p>
                        Created calendar event web site with functional react components and web hooks
                        to help manage state. Implemented material UI date picker, array methods for rendering dynamic HTML 
                        elements, and used Axios to request data for list of events. Integrated front end work with team 
                        by engaging in pair programming with back end and front end developers. 
                    </p>
                    <div>
                        <div>
                            <Button variant="contained" className={classes.button} href="https://blockclubcalendar.now.sh" target="_blank">
                                View Website
                            </Button>
                            <Button variant="contained" className={classes.button} href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE" target="_blank">
                                View Code
                            </Button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>    
        </>
    )
}

export default Project1;