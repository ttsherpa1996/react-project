import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="https://images.snapwi.re/assets/images/sw-logo-icon@2x.png"/>
      </div>
      <div className="links">
      <NavLink to="/opensale" className="link" activeClassName="active">Open</NavLink>
      <NavLink to="/acceptedsale" className="link">Accepted</NavLink>
      <NavLink to="/soldsale" className="link">Sold</NavLink>
      </div>
    </div>
  );
};

export default Nav;
