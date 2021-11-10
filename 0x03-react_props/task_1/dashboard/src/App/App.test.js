import React from "react";
import { shallow } from "enzyme";
import App from "./App/App";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


describe("App components", () => {
  it("renders the App without crashing", () => {
    shallow(<App />);
  });