import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("App components", () => {
  it("renders the Login without crashing", () => {
    shallow(<Login />);
  });
  it("renders the div with the input and label tags", () => {
    const wrapper = shallow((<Login />));
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
});
