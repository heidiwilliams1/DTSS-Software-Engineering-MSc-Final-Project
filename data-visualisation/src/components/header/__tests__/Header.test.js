import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);

    const title = screen.getByText("In-Play Football");
    const teams = screen.getByText("Bradford City 2 - 0 Leeds United");

    expect(title).toBeInTheDocument();
    expect(teams).toBeInTheDocument();
  });
});
