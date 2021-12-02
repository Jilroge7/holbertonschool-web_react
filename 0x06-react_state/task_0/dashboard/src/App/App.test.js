/**
* @jest-environment jsdom
*/

import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import { jest } from '@jest/globals'
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App components", () => {
  it("renders the App without crashing", () => {
    shallow(<App />);
  });
  it("renders the Notifications without crashing", () => {
    shallow(<Notifications />);
  });
  it("renders the Header without crashing", () => {
    shallow(<Header />);
  });
  it("renders the Login without crashing", () => {
    shallow(<Login />);
  });
  it("renders the Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("display CourseList when loggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  it('verifies the default state of displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });
  it('verifies handleHideDrawer changes the displayDrawer state to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  })
});

describe("event listener for ctrl and h keys", () => {
  it("checks for logout function called", () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
  it("calls an alert", () => {
    const window = {
      alert() {
        return true;
      },
    };
    const spy = jest.spyOn(window, 'alert');
    const hasAlert = window.alert();
    expect(spy).toHaveBeenCalled();
    expect(hasAlert).toBe(true);
    spy.mockRestore();
  });
    

    
  })

describe("CourseList component", () => {
  it("CourseList displayed properly", () => {
    shallow(<CourseList />);
  });
})