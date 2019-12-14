import React from 'react';
import Button from '@material-ui/core/Button';

const Project3 = () => {

    return (
      <>
        <div className="firstProject1">
          <a href="https://project-list.now.sh" target="_blank">
            <img 
            src="images/todo.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
          </a>
          <div className="proj1Text">
            <h2>ToDo List</h2>
            <p>
              Created a ToDo list App front end client via react and back end 
              server and database via sqlite data base management system and 
              knex and express. 
            </p>
            <div className="proj1Buttons">
              <div className="proj1Butt">
                <div>
                  <Button variant="contained" color="primary" href="https://project-list.now.sh" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://github.com/cjogles/project-list" target="_blank">
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

export default Project3;