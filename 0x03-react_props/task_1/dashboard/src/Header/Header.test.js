import React from "react";
import { shallow } from "enzyme";
import logo from '../assets/holberton-logo.jpg';
import Header from "./Header";

describe("App components", () => {
  it("renders the Header without crashing", () => {
    shallow(<Header />);
  });

  it("renders the div with img and h1 tags", () => {
    const wrapper = shallow((<Header />));
    expect(wrapper.contains(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">
          School dashboard
        </h1>
      </header>
    )).toEqual(true);
  });
});
