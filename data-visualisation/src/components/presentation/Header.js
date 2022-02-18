import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="eventHeader">
        <h1 className="header">In-Play Football</h1>
        <h2 className="teamNames">
          {" "}
          <span className="homeTeam"> | </span>Bradford City 2 - 0 Leeds United{" "}
          <span className="awayTeam"> |</span>
        </h2>
      </div>
    );
  }
}

export default Header;
