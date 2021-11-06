import React from "react";
import { Notifications } from "./Notifications";
import { shallow } from "enzyme";

describe('root notifications components', () => {
  it('renders root notifications without crashing', () => {
    shallow(<Notifications />);
  });

  it("renders three list items", () => {
    const wrapper = shallow((
      <Notifications />
    ));
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  it("renders the text for notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
});