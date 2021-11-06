import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { getFullYear, getFooterCopy } from "./utils";

describe("App components", () => {
  it("renders the App without crashing", () => {
    const wrapper = shallow(<App />);
  )};

  it("renders the div with the class App-header", () => {
    const wrapper = shallow((
      <App>
        <div className="App-header" />
      </App
    ));
    expect(wrapper.contains(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">
          School dashboard
        </h1>
      </header>
    )).toEqual(true);
  });

  it("renders the div with the class App-body", () => {
    const wrapper = shallow((
      <App>
        <div className="App-body" />
      </App
    ));
    expect(wrapper.contains(
      <body className="App-body">
        <p>
        Login to access the full dashboard
        </p>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="btn">OK</button>
      </body>
    )).toEqual(true);
  });

  it("renders the div with the class App-footer", () => {
    const wrapper = shallow((
      <App>
        <div className="App-footer" />
      </App
    ));
    expect(wrapper.contains(
      <footer className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
      </footer>
    )).toEqual(true)
  });
});
