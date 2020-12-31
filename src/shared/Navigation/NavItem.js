import React, { Component } from "react";
import NavList from "./NavList";

class NavItem extends Component {
  render() {
    return (
      <div>
        <NavList
          classname="waves-effect blue-text"
          href="/"
          position="Home"
        />
        <NavList
          classname="waves-effect blue-text"
          href="Penyebaran"
          position=" Penyebaran"
        />
        <NavList
          classname="waves-effect blue-text"
          href="Grafik"
          position="Grafik"
        />
        <NavList
          classname="waves-effect blue-text"
          href="Klasemen"
          position="Klasemen"
        />
      </div>
    );
  }
}

export default NavItem;
