import React, { Component } from "react";

class NavList extends Component {
  constructor(props) {
    super(props);
    this.classname = props.classname;
    this.href = props.href;
    this.position = props.position;
  }
  render() {
    return (
      <li>
        <a className={this.classname} href={this.href}>
          {this.position}
        </a>
      </li>
    );
  }
}

export default NavList;
