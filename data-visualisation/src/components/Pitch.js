import React from "react";
import { ReactComponent as PitchSvg } from "../assets/pitch.svg";
class Pitch extends React.Component {
  render() {
    return (
      <div className="pitch">
        <PitchSvg />
      </div>
    );
  }
}

export default Pitch;
