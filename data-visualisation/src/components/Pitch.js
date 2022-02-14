import React from "react";
import { ReactComponent as PitchSvg } from "../assets/pitch.svg";
import { Data } from "../components";
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
            <div className="freeKickData">
              <PitchSvg className="pitchSvg" />
              <Data className="graph" />
            </div>
          </div>
          <div label="Shots">
            <div className="shotsData">
              <PitchSvg className="pitchSvg" />
            </div>
          </div>
          <div label="Cards">
            <div className="cardsData">
              <PitchSvg className="pitchSvg" />
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Pitch;
