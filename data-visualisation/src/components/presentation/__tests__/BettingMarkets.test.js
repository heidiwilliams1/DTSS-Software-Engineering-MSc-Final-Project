import React from "react";
import { render } from "@testing-library/react";
import BettingMarkets from "../BettingMarkets";

describe("BettingMarkets", () => {
  it("renders correctly", () => {
    render(<BettingMarkets />);

    expect(screen.getByTestId("betting-markets")).toBeInTheDocument();
  });

  // To do - more tests?
});
