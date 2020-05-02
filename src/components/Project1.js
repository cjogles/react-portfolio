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
        <h2>Partydox!</h2>
        <p>
          Full Stack Web App built with Postgres, Express, React, and Node.js
        </p>
        <div className="proj2Buttons">
          <div className="proj2Butt">
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://partydox.now.sh/" rel="noopener noreferrer" target="_blank">
              View Website
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/partydox-react-front-end" rel="noopener noreferrer" target="_blank">
                View Front End Code Base
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/party-dox-database-server" rel="noopener noreferrer" target="_blank">
                View Back End Code Base
              </Button>
            </div>
            <div>
              <Button style={butt} variant="contained" color="primary" href="https://documenter.getpostman.com/view/9583823/Szf26BGF?version=latest" rel="noopener noreferrer" target="_blank">
                View Postman Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="proj2img">
        <a href="https://partydox.now.sh/" rel="noopener noreferrer" target="_blank">
          <img 
          src="images/partydox1.png" 
          alt="partydox! website home page" 
          />
        </a>
      </div>
    </div>
  </>
    )
}

export default Project1;