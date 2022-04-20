import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

describe("Nav Bar", () => {
  it("renders text correctly", () => {
    render(<NavBar />);

    expect(screen.getByTestId("navbar")).toHaveTextContent("Pitch");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Stats");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Line-ups");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Player Stats");
  });
});
