import React from "react";

import germany from "../images/germany.png";
import alltag from "../images/alltag.png";
import weatherapp from "../images/weatherapp.png";
import blog from "../images/blog.png";
import guess from "../images/guess.png";

const Projects = () => (
  <React.Fragment>
    <section className="projects puff-in-center" id="projects">
    <h1 className="hprojects">Projects</h1>
      <div className="row">
        <div className="column">
      <div className="projectbox">
        <img src={alltag} alt="homepage" />
        <ul>
          <h2>Alltagsalternativen</h2>
          <li>
            <h3>Technology</h3>
          </li>
          <li>
            <p>CSS, JavaScript, jQuery, React</p>
          </li>
          <li>
            <h3>Goal</h3>
          </li>
          <li>
            <p>
              This is a science project that started in 2012 as part of the seminar "Feminismus schreiben lernen" at Humboldt
              University Berlin. 
            </p>
          </li>
          <li>
            <a
              className="button"
              href=" https://kasaberlin.github.io/Alltagsalternativen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Homepage</span>
              <i className="fas fa-home"></i>
            </a>
            <span>|</span>
            <a
              className="button"
              href="https://de-de.facebook.com/Alltagsalternativen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Facebook </span>
              <i className="fab fa-facebook"></i>
            </a>
            <span>|</span>
            <a
              className="button"
              href="https://github.com/KasaBerlin/Alltagsalternativen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Git Hub</span>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div className="column">
      <div className="projectbox">
        <img
          src={guess}
          alt="homepage"
          rel="noopener noreferrer"
        />
        <ul>
          <h2>Game</h2>
          <li>
            <h3>Technology</h3>
          </li>
          <li>
            <p>CSS, Javascript</p>
          </li>
          <li>
            <h3>Goal</h3>
          </li>
          <li>
            <p>Guess a number.</p>
          </li>
          <li>
            <a
            className="button"
              href="https://kasaberlin.github.io/guessaNumber/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <span>Homepage</span>
              <i className="fas fa-home"></i>
            </a>
            <span>|</span>
            <a
              className="button"
              href="https://github.com/KasaBerlin/guessaNumber.git"
              target="_blank"
              rel="noopener noreferrer"
              >
              <span>Git Hub</span>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="column">
      <div className="projectbox">
        <img src={weatherapp} alt="homepage" />
        <ul>
          <h2>Weather App</h2>
          <li>
            <h3>Technology</h3>
          </li>
          <li>
            <p>CSS, JavaScript</p>
          </li>
          <li>
            <h3>Goal</h3>
          </li>
          <li>
            <p>A simple weather app.</p>
          </li>
          <li>
            <a
            className="button"
            href="https://kasaberlin.github.io/weatherApp/"
              target="_blank"
              rel="noopener noreferrer"
              >
              {" "}
              <span>Homepage</span>
              <i className="fas fa-home"></i>
            </a>{" "}
            <span>|</span>
            <a
              className="button"
              href="https://github.com/KasaBerlin/weatherApp.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Git Hub</span>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
     </div>
     <div className="column">
      <div className="projectbox">
        <img
    
          src={blog}
          alt="homepage"
          rel="noopener noreferrer"
        />
        <ul>
          <h2>Blogsite</h2>
          <li>
            <h3>Technology</h3>
          </li>
          <li>
            <p>CSS, Javascript, Local Storage, React</p>
          </li>
          <li>
            <h3>Goal</h3>
          </li>
          <li>
            <p>Created this nice blogsite with React.</p>
          </li>
          <li>
            <a
            className="button"
              href="https://kasaberlin.github.io/blogSite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span>Homepage</span>
              <i className="fas fa-home"></i>
            </a>
            <span>|</span>
            <a
              className="button"
              href="https://github.com/KasaBerlin/blogSite.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Git Hub</span>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      </div>
      </div>
      <div className="row">
    {/* <div className="column">
    <div className="projectbox">
      <img
        src={germany}
        alt="homepage"
        rel="noopener noreferrer"
      />
      <ul>
        <h2>Germany</h2>
        <li>
          <h3>Technology</h3>
        </li>
        <li>
          <p>CSS, Bootstrap</p>
        </li>
        <li>
          <h3>Goal</h3>
        </li>
        <li>
          <p>A tourist page about Germany.</p>
        </li>
        <li>
          <a
          className="button"
            href="https://kasaberlin.github.io/Bootstrap-LP/."
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>Homepage</span>
            <i className="fas fa-home"></i>
          </a>
          <span>|</span>
          <a
            className="button"
            href="https://github.com/KasaBerlin/Bootstrap-LP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Git Hub</span>
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
    </div> */}
      </div>
    </section>
  </React.Fragment>
);

export default Projects;
