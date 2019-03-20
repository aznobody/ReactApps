import React, { Component } from "react";

// const Navbar = props => {
//   console.log("Navbar- Rendered");
// };

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log("NavBar-Constructor");
  }
  componentDidMount() {
    console.log("Navbar - Mounted");
  }
  render() {
    console.log("Navbar - Rendering...");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
