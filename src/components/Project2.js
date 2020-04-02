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
              Built the marketing website for my brother in laws pest control 
              startup company. I used LESS preprocessor to style the website
              responsively and consistently according to my clients specifications.
              Worked 1 on 1 with client to make changes to website via zoom and phone 
              calls. Implemented front end UI via react components.
            </p>
            <div className="proj2Buttons">
              <div className="proj2Butt">
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://lindyslocalpest.com" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://github.com/cjogles/Lindys-Local-Pest" target="_blank">
                    View README
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="https://lindyslocalpest.com" target="_blank">
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