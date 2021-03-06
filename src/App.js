import React from "react";
import "../src/css/index.css";
import NavBar from "./components/NavBar";
import Buttons from "./components/Buttons";
import Project1 from "./components/Project1";
import SignLingo from "./components/SignLingo";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Skillz from "./components/Skillz";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {

  return (
    <>
      <div className="app">
        <NavBar />
        <div className="home-page">
          <div className="title">
            <h1>Hi! My name is Jackson and I'm a Web Developer. </h1>
          </div>
          <img src="/images/heythere.JPG" />
        </div>
        <Buttons />
        <Project1 />
        <Project2 />
        <SignLingo />
        <Project3 />
        <Skillz />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}

export default App;
