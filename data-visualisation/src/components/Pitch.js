import React from "react";
import { ReactComponent as PitchSvg } from "../assets/pitch.svg";
import { FreeKicks, Cards, Goals } from "./Graphs";
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
              <FreeKicks className="graph" />
            </div>
          </div>
          <div label="Goals">
            <div className="shotsData">
              <PitchSvg className="pitchSvg" />
              <Goals className="graph" />
            </div>
          </div>
          <div label="Cards">
            <div className="cardsData">
              <PitchSvg className="pitchSvg" />
              <Cards className="graph" />
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Pitch;
