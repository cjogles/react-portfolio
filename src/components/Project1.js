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
  }, 
  familyH2: {
    fontSize: '4rem',
    fontFamily: 'Wendy One, Sans-serif',
  },
  familyP: {
    fontSize: '2rem',
    fontFamily: 'Wendy One, sans-serif',
  }
}));

const Project1 = () => {
    const classes = useStyles();
    return (
        <>
        <div className="imageContentMobile" style={{textAlign:"center", backgroundColor:"#e1f5fe", borderBottom: "1px solid black", borderTop: "1px solid black"}}>
            <h2 className={classes.familyH2} style={{fontSize:"4rem"}}>Projects</h2>
        </div>
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
                    <h2 className={classes.familyH2}>Block Club Calendar</h2>
                    <p className={classes.familyP}>
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
                <div className="imageContentMobile">
                <img 
                    className="cardImage" 
                    src="images/block-club.jpg" 
                    alt="screenshot of block-club calendar website home page"
                />
            </div>
            </div>
        </div>    
        </>
    )
}

export default Project1;