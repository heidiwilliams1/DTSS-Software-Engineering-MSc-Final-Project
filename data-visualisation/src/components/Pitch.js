import React from "react";
import { ReactComponent as PitchSvg } from "../assets/pitch.svg";
import { Data } from "../components";
class Pitch extends React.Component {
  render() {
    return (
      <div>
        <div className="dataNav">
          <a> Pitch</a>
          <a className="freeKickTab"> Free Kicks</a>
          <a> Shots</a>
          <a> Cards</a>
        </div>
        <div className="pitch">
          <PitchSvg className="pitchSvg" />
          <Data className="graph" />
        </div>
      </div>
    );
  }
}

export default Pitch;
