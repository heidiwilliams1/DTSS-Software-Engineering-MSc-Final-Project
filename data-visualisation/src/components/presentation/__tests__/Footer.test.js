import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders text correctly", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toHaveTextContent(
      "Terms and Conditions"
    );
    expect(screen.getByTestId("footer")).toHaveTextContent("Help");
    expect(screen.getByTestId("footer")).toHaveTextContent("Legal Information");
    expect(screen.getByTestId("footer")).toHaveTextContent(
      "Privacy and Cookies"
    );
    expect(screen.getByTestId("footer")).toHaveTextContent(
      "Committed to Safer Gambling"
    );
  });
});
