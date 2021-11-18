import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem.js';

describe('root notifications components', () => {
  it('renders root notifications without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the text for notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
});