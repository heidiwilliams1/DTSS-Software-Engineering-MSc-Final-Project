import React from "react";
import { ReactComponent as PitchSvg } from "../assets/pitch.svg";
import { Graph } from "../components";
import { Tabs } from "./StatsNavTabs";

class Pitch extends React.Component {
  render() {
    return (
      <div className="pitchContainer">
        <Tabs>
          <div label="Pitch">
            <div className="pitchVis">
              <PitchSvg className="pitchSvg" />
              <div className="pitchText">Current Pitch Visualisation</div>
            </div>
          </div>
          <div label="Free Kicks">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="FREE_KICK" className="graph" />
            </div>
          </div>
          <div label="Offside">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="OFFSIDE" className="graph" />
            </div>
          </div>
          <div label="Cards">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="RED_CARD" className="graph" />
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Pitch;
