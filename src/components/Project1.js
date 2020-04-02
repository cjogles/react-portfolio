import React from 'react';
import Button from '@material-ui/core/Button';

const Project1 = () => {
  const butt = {
    width: '50%',
    display: 'flex',
    margin: 'auto',
    marginBottom: '0.5rem',
    marginTop: '1rem',
  }
    return (
      <>
      <div className="firstProject2">
      <div className="proj2Text">
        <h2>Block Club Calendar</h2>
        <p>
        Worked for a Detroit, MI, non-profit to build a calendar event platform. My work included creating react function components, using JS array methods to dynamically render semantic HTML elements to the DOM, and implementing third party libraries to create UI like a date picker and a login form. I worked along side four other developers on this project.
        </p>
        <div className="proj2Buttons">
          <div className="proj2Butt">
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://blockclubcalendar.now.sh" rel="noopener noreferrer" target="_blank">
              View Website
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE/blob/master/README.md" rel="noopener noreferrer" target="_blank">
                View README
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="proj2img">
        <a href="https://blockclubcalendar.now.sh" rel="noopener noreferrer" target="_blank">
          <img 
          src="images/block-club.jpg" 
          alt="block club website home page" 
          />
        </a>
      </div>
    </div>
  </>
    )
}

export default Project1;