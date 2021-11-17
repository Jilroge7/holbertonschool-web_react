import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


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
  it("does not display CourseList when loggedIn is false", () => {
    
  })
});

describe("CourseList component", () => {
  it("CourseList displayed properly", () => {
    shallow(<CourseList />);
  });
  it
})