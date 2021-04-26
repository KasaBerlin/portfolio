import React from 'react'

import cv from "../cv/CV-KatrinSalac.pdf";

const Iconbar=()=>(
    <div className="iconbar">
      {/* <a href={cv}>
      <span className="text">cv</span>
      <span className="icon"><i className="fas fa-portrait"></i></span>
      </a>
      <a href="mailto:katrinsalac@gmail.com" className="mail">
      <span className="text">mail</span>
      <span className="icon"><i className="fas fa-portrait"></i></span>
      </a> */}
      <a href="https://github.com/KasaBerlin"> <i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/katrin-salac"> <i className="fab fa-linkedin-in"></i></a>
      <a href="https://codepen.io/KasaBerlin"><i className="fab fa-codepen"></i></a> 
    </div>
    );

export default Iconbar;