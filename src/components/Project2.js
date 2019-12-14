import React from 'react';
import Button from '@material-ui/core/Button';

const Project2 = () => {

    return (
      <>
        <div className="firstProject2">
          <div className="proj2Text">
            <h2>Block Club Calendar</h2>
            <p>
              Worked for a Detroit, MI non-profit as a junior react dev to build
              a calendar event web platform. Assited team in creating functional components,
              dynamic html elements rendered to the DOM via JS array methods,
              and implemented third party libraries to create UI like a date picker and login 
              forms.
            </p>
            <div className="proj2Buttons">
              <div className="proj2Butt">
                <div>
                  <Button variant="contained" color="primary" href="https://blockclubcalendar.now.sh" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE" target="_blank">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <a href="https://blockclubcalendar.now.sh" target="_blank">
            <img 
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
          </a>
        </div>
      </>
    )
}

export default Project2;