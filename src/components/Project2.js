import React from 'react';
import Button from '@material-ui/core/Button';

const Project2 = () => {

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
            <h2>Lindy's Local Pest Control</h2>
            <p>
              Built and deployed marketing page for local pest control business.
            </p>
            <p>
              Utilized HTML, CSS, Javascript, React, and LESS.
            </p>
            <div className="proj2Buttons">
              <div className="proj2Butt">
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://lindyslocalpest.com" rel="noopener noreferrer" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/Lindys-Local-Pest" rel="noopener noreferrer" target="_blank">
                    View Front End Code Base
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="proj2img">
            <a href="https://lindyslocalpest.com" rel="noopener noreferrer" target="_blank">
              <img 
              src="images/pest.png" 
              alt="screenshot of lindys local pest control website home page" 
              />
            </a>
          </div>
        </div>
      </>
    )
}

export default Project2;