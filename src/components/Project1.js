import React from 'react';
import Button from '@material-ui/core/Button';

const Project1 = () => {

    return (
      <>
        <div id="firstProject" style={{display: "flex", marginTop: "23rem"}}>
          <img 
            style={{width: "50rem", margin: "5rem"}}
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page"
          />
          <div style={{margin: "5rem"}}>
            <h2>Block Club Calendar</h2>
            <p>
              Created calendar event web site with functional react components and web hooks
              to help manage app state data. Implemented material UI date picker, array methods for rendering dynamic HTML 
              elements, and used Axios to request data for list of events. Integrated front end work with team 
              by engaging in pair programming with back end and front end developers. 
            </p>
            <div>
              <Button variant="contained" color="primary" href="https://blockclubcalendar.now.sh" target="_blank">
              View Website
              </Button>
              <Button variant="contained" color="primary" href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE" target="_blank">
                View Code
              </Button>
            </div>
          </div>
        </div>
      </>
    )
}

export default Project1;