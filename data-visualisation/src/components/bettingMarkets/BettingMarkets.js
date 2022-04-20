import React from "react";

class BettingMarkets extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }} data-testid="betting-markets">
        <div className="marketRules">
          {" "}
          Bets placed in accordance with our{" "}
          <a href="https://support.skybet.com/s/article/Football-Rules">
            Market Rules
          </a>{" "}
        </div>
        <div className="market">Full Time Result</div>
        <div className="outcomes">
          <div className="outcome">Win 11/8</div>{" "}
          <div className="outcome">Draw 5/4</div>{" "}
          <div className="outcome">Win 3/1</div>
        </div>
        <div className="market">Next Team to Score</div>
        <div className="outcomes">
          <div className="outcome">Home 11/8</div>{" "}
          <div className="outcome">No score 5/4</div>{" "}
          <div className="outcome">Away 3/1</div>
        </div>
        <div className="market">Both teams to score</div>
        <div className="outcomes">
          <div className="outcome">Yes 11/8</div>{" "}
          <div className="outcome">No 5/4</div>
        </div>
        <div className="market">To score 2+ Goals</div>
        <div className="outcomes">
          <div className="outcome">Home 11/8</div>{" "}
          <div className="outcome">Away 5/4</div>
        </div>
      </div>
    );
  }
}

export default BettingMarkets;
