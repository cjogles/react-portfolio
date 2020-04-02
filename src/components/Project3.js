import React from "react";
import Button from "@material-ui/core/Button";
import Carousel from "@brainhubeu/react-carousel";

export default class Project3 extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="project3">
        <p className="project3head">Click to See My Other Projects!</p>
        {/* <input
        type="number"
        value={this.state.value}
        onChange={e => this.onChange(parseInt(e.target.value || 0))}
      /> */}
        <Carousel
          className="carousel"
          value={this.state.value}
          onChange={this.onChange}
          slides={[
            <div className="firstProject">
              <a
                href="https://plantpurpose.now.sh"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="imgproj3"
                  src="/images/plant.png"
                  alt="picture of plant purpose website"
                />
              </a>
              <div className="buttons">
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://plantpurpose.now.sh"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Website
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/Plant-Purpose"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Code
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.youtube.com/watch?v=s5Ib7fHBSTQlist=PLTrij8iU8hRrvTLbln5H5umHasxrLZPWc"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Video Presentation
                  </Button>
                </div>
                <p>Remember to Water Your Plants!</p>
              </div>
            </div>,
            <div className="firstProject">
              <a
                href="https://plantpurpose.now.sh"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="imgproj3"
                  src="/images/plant.png"
                  alt="picture of plant purpose website"
                />
              </a>
              <div className="buttons">
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://plantpurpose.now.sh"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Website
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/Plant-Purpose"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Code
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.youtube.com/watch?v=s5Ib7fHBSTQlist=PLTrij8iU8hRrvTLbln5H5umHasxrLZPWc"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Video Presentation
                  </Button>
                </div>
                <p>Remember to Water Your Plants!</p>
              </div>
            </div>
          ]}
          arrows
          clickToChange
          infinite
        />
      </div>
    );
  }
}
