import React from "react";
import { withRouter } from "react-router-dom";

const Trademark=props=>{
const history=props;
const path=history.location.pathname;
return path === "/" ? null : <footer className="trademark" id="trademark">Kasa Berlin © 2019</footer>};

export default withRouter(Trademark);



