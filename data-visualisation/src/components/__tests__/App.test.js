import React from "react";
import App from "./App";
import {Header , Footer, NavBar, Pitch, BettingMarkets} from "..";
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("App", () => {
  it("renders Header Component", () => {
    const wrapper = shallow(<App  />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it("renders Footer Component", () => {
    const wrapper = shallow(<App  />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it("renders NavBar Component", () => {
    const wrapper = shallow(<App  />);
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it("renders Pitch Component", () => {
    const wrapper = shallow(<App  />);
    expect(wrapper.containsMatchingElement(<Pitch />)).toEqual(true);
  });

  it("renders BettingMarkets Component", () => {
    const wrapper = shallow(<App  />);
    expect(wrapper.containsMatchingElement(<BettingMarkets />)).toEqual(true);
  });
});
