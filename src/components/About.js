import React from "react";

const About = () => (
  <React.Fragment>
    <section className="about puff-in-center" id="about">
    <h1>About me...</h1>
    <div className="content aboutbox">
      <article className="bio">
      <div className="date">
        <span>Bio</span>
      </div>
      I gained my first experience with HTML/CSS by creating a website for a political
      project called "Alltagsalternativen" at my studies for Kunst- und Bildgeschichte 
      in 2011.
      There I discovered my passion for building websites and I wanted to know more about 
      it. I started a full year course in web development at DCI Berlin to dive deeper 
      into the possibilities for creating web applications. At the same time Iam extending 
      my knowledge by attending online courses and creating small projects.
      Always improving my skills, Iam looking forward to participate in interesting 
      projects and challenges. 
      </article>
      <article className="skills">
      <div className="date">
        <span>Skills</span>
      </div>
       <p><span>LANGUAGES/ FRAMEWORKS/ LIBRARIES:</span> HTML | CSS | SASS | BOOTSTRAP | JAVASCRIPT | JQUERY | REACT | REDUX | MONGO DB | MONGOOSE | LOWDB | NODE.JS | EXPRESS</p> <br></br>
        <p><span>TOOLS:</span> GIT | WEBPACK | POSTMAN | COMPASS | TERMINAL | VS CODE | SUBLIME TEXT</p> 
      </article>
      </div>
    </section>
  </React.Fragment>
);

export default About;
