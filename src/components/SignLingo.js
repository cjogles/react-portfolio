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
      <div id="firstProject" className="firstProject2">
      <div className="proj2Text">
        <h2>Sign Lingo</h2>
        <p>
          Full Stack Web App to learn American Sign Language
        </p>
        <div className="proj2Buttons">
          <div className="proj2Butt">
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://thesignlingo.com/" rel="noopener noreferrer" target="_blank">
              View Website
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/signlingo-fe" rel="noopener noreferrer" target="_blank">
                View Front End Code Base
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/signlingo-be" rel="noopener noreferrer" target="_blank">
                View Back End Code Base
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://www.youtube.com/playlist?list=PLTrij8iU8hRoEAmyLXHlBaPUNTA_JLdbj" rel="noopener noreferrer" target="_blank">
                View Video Presentation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="proj2img">
        <a href="https://thesignlingo.com/" rel="noopener noreferrer" target="_blank">
          <img 
          src="images/signlingo.png" 
          alt="sign lingo home page" 
          />
        </a>
      </div>
    </div>
  </>
    )
}

export default Project1;