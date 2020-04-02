import React from 'react';
import Button from '@material-ui/core/Button';

const Project1 = () => {

    return (
      <>
        <div id="firstProject" className="firstProject1">
          <a href="https://blockclubcalendar.now.sh" target="_blank">
            <img 
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
          </a>
          <div className="proj1Text">
            <h2>Block Club Calendar</h2>
            <p>
              Worked for a Detroit, MI, non-profit to build
              a calendar event platform. My work included creating react function components,
              using JS array methods to dynamically render semantic HTML elements to the DOM,
              and implementing third party libraries to create UI like a date picker and a login 
              form. I worked along side four other developers on this project.
            </p>
            <div className="proj1Buttons">
              <div className="proj1Butt">
                <div>
                  <Button variant="contained" color="primary" href="https://blockclubcalendar.now.sh" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE/blob/master/README.md" target="_blank">
                    View README
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img className="hiddenImg"
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
        </div>
      </>
    )
}

export default Project1;