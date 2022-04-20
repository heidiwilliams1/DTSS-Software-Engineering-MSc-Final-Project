import React from "react";
import { render, screen } from "@testing-library/react";
import Tab from "../Tab";

describe("Tab", () => {
  it("renders the Tab component", () => {
    render(
      <Tab
        activeTab={"FreeKicks"}
        key={"FreeKicks"}
        label={"FreeKicks"}
        onClick={jest.fn()}
      />
    );

    const tabText = screen.getByText("FreeKicks");

    expect(tabText).toBeInTheDocument();
  });
});
