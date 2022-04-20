import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders the Header Component", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders the Footer Component", () => {
    render(<App />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the NavBar Component", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the BettingMarkets Component", () => {
    render(<App />);
    expect(screen.getByTestId("betting-markets")).toBeInTheDocument();
  });

  it("renders the Pitch Component", () => {
    render(<App />);
    expect(screen.getByTestId("pitch")).toBeInTheDocument();
  });
});
