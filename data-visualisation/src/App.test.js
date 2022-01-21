import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders Header Component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Header/i);
    expect(linkElement).toBeInTheDocument();
  });
});
