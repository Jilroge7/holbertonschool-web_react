import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';

describe('NotificationItem component', () => {
  it('renders the notification item without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the component to have type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain("<li data-notification-type=\"default\">test</li>");
  });

  it('renders the component to have htmlprops', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain("<u>test</u>");
  });
});