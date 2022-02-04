import React from "react";
import { render } from "@testing-library/react";
import BettingMarkets from "../BettingMarkets";

describe("BettingMarkets", () => {
  it("renders correctly", () => {
    const bettingMarkets = render(<BettingMarkets />);
    expect(bettingMarkets).toMatchSnapshot();
  });
});
