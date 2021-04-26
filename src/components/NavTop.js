import React from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";

class NavTop extends React.Component{
  constructor(props){
    super(props);

    this.state={
      prevScrollpos:window.pageYOffset,
      visible:true
    };
  }

componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
handleScroll = () => {
  const { prevScrollpos } = this.state;

  const currentScrollPos = window.pageYOffset;
  const visible = prevScrollpos > currentScrollPos;
  
  this.setState({
    prevScrollpos: currentScrollPos,
      visible
    });
  };
  
  
  render() {
    const {history}= this.props
    const path=history.location.pathname
    if (path === "/"){
      return null;
    }
    return(
      <React.Fragment>
    <nav className={classnames("navTop", {
      "navbar--hidden": !this.state.visible
    })}id="navTop">
      <Link to="/">
      <span className="text">back</span>
      <span className="icon"><i className="far fa-arrow-alt-circle-left"></i></span>
      </Link>
      <a href="https://codepen.io/KasaBerlin">
      <span className="text">codepen</span>
      <span className="icon"><i className="fab fa-codepen"></i></span>
      </a>
      <a href="https://www.linkedin.com/in/katrin-salac">
      <span className="text">linkedin</span>
      <span className="icon"><i className="fab fa-linkedin-in"></i></span>
      </a>
      <a href="https://github.com/KasaBerlin">
      <span className="text">github</span>
      <span className="icon"><i className="fab fa-github"></i></span>
      </a>
      </nav>
    </React.Fragment>
    )}};

export default withRouter(NavTop);
