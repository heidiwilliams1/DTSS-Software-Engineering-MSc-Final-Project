import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar" data-testid="navbar">
        <a href=""> Pitch </a>
        <a href=""> Stats </a>
        <a href=""> Line-ups </a>
        <a href=""> Player Stats </a>
      </div>
    );
  }
}

export default NavBar;
