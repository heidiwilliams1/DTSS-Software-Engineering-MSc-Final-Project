import React from "react";
import { ReactComponent as PitchSvg } from "../../assets/pitch.svg";
import { Graph } from "../pitch";
import { Tabs } from "../navTabs";

class Pitch extends React.Component {
  render() {
    return (
      <div className="pitchContainer" data-testid="pitch">
        <Tabs>
          <div label="Pitch">
            <div className="pitchVis">
              <PitchSvg className="pitchSvg" data-testid="pitch-svg" />
              <div className="pitchText">Current Pitch Visualisation</div>
            </div>
          </div>
          <div label="Free Kicks">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="FREE_KICK" className="graph" />
            </div>
          </div>
          <div label="Offsides">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="OFFSIDE" className="graph" />
            </div>
          </div>
          <div label="Red Cards">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="RED_CARD" className="graph" />
            </div>
          </div>
          <div label="Yellow Cards">
            <div className="data">
              <PitchSvg className="pitchSvg" />
              <Graph eventType="YELLOW_CARD" className="graph" />
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Pitch;
