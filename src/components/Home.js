import React from "react";
import { Link } from "react-router-dom";
import Iconbar from "./Iconbar";
const Nav = () => (
  <section className="home puff-in-center" id="home">
    <nav className="full">
      <div className="homeBar"></div>
      <Link to="/aboutme" className="aboutme">
        About
      </Link>
      <Link to="/work" className="work">
        Projects
      </Link>
      <Link to="/contact" className="contactNav">
        Contact
      </Link>
      <a href="mailto:katrinsalac@gmail.com" className="mail">
        mail
      </a>
      <Iconbar />
      <div className="welcome"></div>
      <p className="welcomeP">
        Hi, my name is Kasa. I`m a web developer in Berlin.
      </p>
    </nav>
  </section>
);

export default Nav;
