import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import "./NavBar.css";
import NavItem from "./NavItem";

class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      const elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, { edge: "left" });
    });
  }

  render() {
    return (
      <nav className="navi" role="navigation">
        <div className="nav-wrapper container">
          <a
            href="/"
            className="brand-logo red-text darken-3"
            id="logo-container"
          >
            COVI<span className="white-text">D-19 </span>
          </a>
          <a
            href="/"
            className="sidenav-trigger red-text darken-3 "
            data-target="nav-mobile"
          >
            <i className="material-icons">menu</i>
          </a>

          <ul className="topnav right hide-on-med-and-down">
            <NavItem />
          </ul>
          <ul className="sidenav" id="nav-mobile">
            <NavItem />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
