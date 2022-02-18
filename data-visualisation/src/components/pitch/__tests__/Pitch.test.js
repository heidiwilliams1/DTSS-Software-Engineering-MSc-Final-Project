import React from "react";
import { render, screen } from "@testing-library/react";
import Pitch from "../Pitch";

describe("Pitch", () => {
  it("renders Tabs component", () => {
    render(<Pitch />);
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  it("renders pitch svg", () => {
    render(<Pitch />);

    expect(screen.getByTestId("pitch-svg")).toBeInTheDocument();
  });

  it("renders correct text", () => {
    render(<Pitch />);

    expect(screen.getByText("Pitch")).toBeInTheDocument();
    expect(screen.getByText("Free Kicks")).toBeInTheDocument();
    expect(screen.getByText("Offsides")).toBeInTheDocument();
    expect(screen.getByText("Red Cards")).toBeInTheDocument();
    expect(screen.getByText("Yellow Cards")).toBeInTheDocument();
  });
});
