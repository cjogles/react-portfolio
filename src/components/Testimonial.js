import React from "react";
import Button from "@material-ui/core/Button";
import Carousel from "@brainhubeu/react-carousel";

export default class Testimonial extends React.Component {
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
        <p className="project3head">Testimonials 😊</p>
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
                href="https://www.linkedin.com/in/amberly-sorensen"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="testimonial"
                  src="/images/amber.png"
                  alt="picture of plant purpose website"
                />
              </a>
              <div className="buttons">
                <div className='testdiv'>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.linkedin.com/in/amberly-sorensen"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact Amber on Linkedin
                  </Button>
                </div>
                <p className='testp'>Jackson is an immeasurable asset to my team. He consistently delivers on any task I set him to, and does it with an incredible attitude. His collaborative skills combined with his strong work ethic and influential leadership makes him a valuable resource for his student charges, and a member of my team that helps keeps things running smoothly. Jackson is responsible, reliable, and logical. All those skills combined with his broad knowledge of programming makes him an excellent candidate for a management position. Jackson would flourish and undoubtedly bring a new level of success to any team he is on. </p>
              </div>
            </div>,
            <div className="firstProject">
              <a
                href="https://www.linkedin.com/in/ira-sanchez"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="testimonial"
                  src="/images/ira.png"
                  alt="picture of plant purpose website"
                />
              </a>
              <div className="buttons">
                <div className='testdiv'>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.linkedin.com/in/ira-sanchez"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact Ira on Linkedin
                  </Button>
                </div>
                <p className='testp'>I’ve had the pleasure of working with Jackson during our 8-week contract as Team Leads, during which we helped manage the academic success of over 150 students. Above all, I was impressed with Jackson’s ability to listen and speak very carefully and with the awareness that his words influence students/his colleagues. Jackson would be a true asset for any positions requiring a front-end engineer who is humble yet personable and comes with my heartfelt recommendation.</p>
              </div>
            </div>
          ]}
          arrows
          clickToChange
          infinite
          // autoPlay={5000}
          // animationSpeed={1500}
        />
      </div>


      // <div className="testimony">
      //   <p className="testimonyhead">Testimonials 😊 </p>
      //   <Carousel
      //     className="carousel1"
      //     value={this.state.value}
      //     onChange={this.onChange}
      //     slides={[
      //       <div className="firstProject1">
      //         <a
      //           href="https://www.linkedin.com/in/amberly-sorensen"
      //           rel="noopener noreferrer"
      //           target="_blank"
      //         >
      //           <img
      //             className="mine"
      //             src="/images/amber.png"
      //             alt="Amber mentioning how great I am"
      //           />
      //         </a>
      //         <div className="buttons1">
      //           <p className="testimonyPerson">Amber Sorensen </p>
      //           <p className="testimonyPerson1">Section Lead @ Lambda School (Currently Software Engineer at MMSG)</p>
      //           <p className="description">Jackson is an immeasurable asset to my team. He consistently delivers on any task I set him to, and does it with an incredible attitude. His collaborative skills combined with his strong work ethic and influential leadership makes him a valuable resource for his student charges, and a member of my team that helps keeps things running smoothly. Jackson is responsible, reliable, and logical. All those skills combined with his broad knowledge of programming makes him an excellent candidate for a management position. Jackson would flourish and undoubtedly bring a new level of success to any team he is on. 
      //           </p>
      //         </div>
      //       </div>,
      //       <div className="firstProject1">
      //         <a
      //           href="https://www.linkedin.com/in/ira-sanchez"
      //           rel="noopener noreferrer"
      //           target="_blank"
      //         >
      //           <img
      //             className="mine"
      //             src="/images/ira.png"
      //             alt="Ira mentioning how great I am"
      //           />
      //         </a>
      //         <div className="buttons1">
      //           <p className="testimonyPerson">Ira Sanchez </p>
      //           <p className="testimonyPerson1">Team Lead @ Lambda School</p>
      //           <p className="description"> I’ve had the pleasure of working with Jackson during our 8-week contract as Team Leads, during which we helped manage the academic success of over 150 students. Above all, I was impressed with Jackson’s ability to listen and speak very carefully and with the awareness that his words influence students/his colleagues. Jackson would be a true asset for any positions requiring a front-end engineer who is humble yet personable and comes with my heartfelt recommendation.
      //           </p>
      //         </div>
      //       </div>
      //     ]}
      //     arrows
      //     clickToChange
      //     infinite
      //   />
      // </div>
    );
  }
}
